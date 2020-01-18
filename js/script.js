'use strict';
function titleClickHandler(event) {

  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
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
optTitleSelector = '.post-title';
optTitleListSelector = '.titles';
function generateTitleLinks(){
  /* remove contents of titleList */
  const titleList = document.querySelector('.list.titles');
  titleList.innerHTML = '';
  /* for each article */
  const articles = document.querySelectorAll('.posts .post');
  let html = '';
  for(let article of articles){
    /* get the article id */
    console.log('w srodku petli:', article)
    const articleId = article.getAttribute('id');
    console.log('wyciagniete ID:', articleId)
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
  console.log('KONCOWA LISTA: ', html)
  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a');
  for(let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
  /* insert link into titleList */
}
generateTitleLinks();
