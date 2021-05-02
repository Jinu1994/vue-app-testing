import { mount } from '@vue/test-utils';
import axios from 'axios';
import Vuetify from 'vuetify';
import flushPromises from 'flush-promises';

import Posts from '@/components/Posts.vue'
import Post from '@/components/Post.vue'

jest.mock('axios');

const posts = [
  {
    'userId': 1,
    'id': 1,
    'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    'userId': 1,
    'id': 2,
    'title': 'qui est esse',
    'body': 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
  },
  {
    'userId': 1,
    'id': 3,
    'title': 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    'body': 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
  }, {
    'userId': 2,
    'id': 15,
    'title': 'eveniet quod temporibus',
    'body': 'reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae'
  },
  {
    'userId': 2,
    'id': 16,
    'title': 'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio',
    'body': 'suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta'
  },
  {
    'userId': 2,
    'id': 17,
    'title': 'fugit voluptas sed molestias voluptatem provident',
    'body': 'eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo'
  },
  {
    'userId': 2,
    'id': 18,
    'title': 'voluptate et itaque vero tempora molestiae',
    'body': 'eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam'
  },
  {
    'userId': 2,
    'id': 19,
    'title': 'adipisci placeat illum aut reiciendis qui',
    'body': 'illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas'
  },
  {
    'userId': 2,
    'id': 20,
    'title': 'doloribus ad provident suscipit at',
    'body': 'qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo'
  },
  {
    'userId': 3,
    'id': 21,
    'title': 'asperiores ea ipsam voluptatibus modi minima quia sint',
    'body': 'repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt'
  }
]

describe('Posts.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify()
  });
  // mocking users list
  axios.get.mockImplementation((url, parameters) => {
    return Promise.resolve({
      data: posts.filter(post => post.userId == parameters.params.userId)
    });
  })

  it('List Posts for a user', async () => {
    const wrapper = mount(Posts, {
      vuetify
    })
    await flushPromises()
    expect(wrapper.html()).toMatchSnapshot();
  })

  it('display post details', () => {
    const wrapper = mount(Post, {
      vuetify,
      propsData: {
        post: {
          'userId': 2,
          'id': 14,
          'title': 'voluptatem eligendi optio',
          'body': 'fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum'
        }
      }
    })

    expect(wrapper.html()).toMatchSnapshot();
  })
})

