const tagsEl = document.getElementById("tags");
const textarea =
  document.getElementById("textarea");
// puts cursor in the text box
textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if(e.key === 'Enter') { 
      setTimeout(() => {
          e.target.value = ''
      }, 10)

    randomSelect()
  }

});

// splits content by comma but also makes sure that spaces are not included in the array
function createTags(input) {
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
  tagsEl.innerHTML = ''

// puts the text from the box into the tags
  tags.forEach(tag => {
      const tagEl = document.createElement('span')
      tagEl.classList.add('tag')
      tagEl.innerText = tag
      tagsEl.appendChild(tagEl)
      
  });
}

function randomSelect(){
    // number of time the selector will filcker
    const times = 30 

    // selects random tag every 100ms
const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    highlightTag(randomTag)

    setTimeout(() => {
        unHighlightTag(randomTag)
    }, 100);
}, 100);

// stops random tag selction and picks one to settle on 
setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
        const randomTag = pickRandomTag()
        highlightTag(randomTag)
    }, 100);

}, times * 100);
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags [Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
} 

function unHighlightTag(tag) {
    tag.classList.remove('highlight')

}