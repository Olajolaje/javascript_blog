'use strict';
function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for (let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  /* add class 'active' to the clicked link */
  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);
  const activeArticles = document.querySelectorAll('.posts .post.active');
  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
  const articleSelector = clickedElement.getAttribute('href');
  const targetArticle = document.querySelector(articleSelector);
  targetArticle.classList.add('active');
}
const links = document.querySelectorAll('.titles a');
for(let link of links) {
  link.addEventListener('click', titleClickHandler);
}
const optArticleSelector = '.post';
const optTitleSelector = '.post-title';
const optTitleListSelector = '.titles';
const optArticleTagsSelector = '.post-tags .list';
const optTagsListSelector = '.tags.list';
let allTags = {};
const optCloudClassCount = 5;
const optCloudClassPrefix = 'tag-size';

function generateTitleLinks(){
  /* remove contents of titleList */
  const titleList = document.querySelector('.list.titles');
  titleList.innerHTML = '';
  /* for each article */
  const articles = document.querySelectorAll('.posts .post');
  let html = '';
  for(let article of articles){
    /* get the article id */
    console.log('w srodku petli:', article);
    const articleId = article.getAttribute('id');
    console.log('wyciagniete ID:', articleId);
    /* find the title element */
    const articleTitleElement = article.querySelector('.post-title');
    /* get the title from the title element */
    const articleTitle = articleTitleElement.innerHTML;
    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);
    html = html + linkHTML;
    console.log('=========');
    // article.classList.remove('.titles a');
  }
  console.log('Koncowa lista: ', html);
  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a');
  for(let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
  /* insert link into titleList */
}
generateTitleLinks();
/*Modul 6 - tagi*/
// =========================================
function calculateTagsParams(tags) {
    const params = {
    max: 0,
    min: 999999,
  }
    return params;
}

function calculateTagClass(){
}
// ===================================================

function generateTags(){
  /* [NEW] create a new variable allTags with an empty array */

  // / find all articles /
  const articles = document.querySelectorAll(optArticleSelector)
  // / STARTLOOP for every article/
  for(let article of articles) {
    // / find tags wrapper /
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    // / make html variable with empty string /
    let html = '';
    // / get tags from data-tags attribute /
    const tags = article.getAttribute('data-tags');
    // / split tags into array /
    const tagsArray = tags.split(' ');
    // / START LOOP: for each tag /
    for(let tag of tagsArray) {
      // / generate HTML of the link /
      const linkHTML = '<a href="tag-' + tag + '">' + tag + ' ' + '</a>';
      // / add generated code to html variable /
      html = html + linkHTML;
      if(!allTags.hasOwnProperty(tag)){
        /* [NEW] add tag to allTags object */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }
    }


    /* [NEW] check if this link is NOT already in allTags */

    // / END LOOP: for each tag /
    tagsWrapper.innerHTML = html;
    // / insert HTML of all the links into the tags wrapper /
  }
 // / END LOOP: for every article: /
 /* [NEW] find list of tags in right column */
  const tagList = document.querySelector('.tags');
  console.log(tagList)

  // /* CHMURA TAGÓW*/ ============================
  function calculateTagsParams(tags) {
  const tagsParams = calculateTagsParams(allTags);
  console.log('tagsParams:', tagsParams)
  for (let tag in tags) {
    console.log(tag + ' is used ' + tags[tag] + 'times')
  }
  if (tags[tag] > params.max){
    params.max = tags[tag];
  }
  if (tags[tag] > params.min){
    params.min = tags[tag];
  }
  return tags
}
// ======================================================
  let allTagsHTML = '';
  console.log(allTags)
  /*[New] START LOOP: for each tag in allTags:*/
  for(let tag in allTags){
    const link = '<li class="' + tag +'"><a href="#">'+ tag + '</a>'+'(' + allTags[tag]  + ')'+'</li>'
    allTagsHTML = link + allTagsHTML
    console.log(tag)
  }
/* [New] END LOOP: for each tag in allTags: */


/* [New] add html from allTagsHTML to tagList */
  tagList.innerHTML = allTagsHTML;

}
generateTags();
