import Model from './model.js';
import friendPage from './pages/friend.js';
import friendsPage from './pages/friends.js';
import newsPage from './pages/news.js';

const newsNavNode = document.querySelector('[data-role=nav-news]');
const friendsNavNode = document.querySelector('[data-role=nav-friends]');

let activeNavNode;

function setActiveNavNode(node) {
  if (activeNavNode) {
    activeNavNode.classList.remove('active');
  }

  activeNavNode = node;
  activeNavNode.classList.add('active');
}

export default {
  async friendsRoute(params) {
    if (params.id) {
      const [friend] = await Model.getUser({user_ids: params.id, fields: 'photo_100, city, country, bdate'});
      friendPage.setData(friend);
      friendPage.render();
    } else {
      const friends = await Model.getFriends({fields: 'photo_100, bdate'});
      friendsPage.setData(friends.item);
      friendsPage.render();
    }

    setActiveNavNode(friendsNavNode);
  },
  async newsRoute() {
    const news = await Model.getNews({fields: 'post', count: 20});
    newsPage.setData(news.item);
    newsPage.render();

    setActiveNavNode(newsNavNode);
  }
};
