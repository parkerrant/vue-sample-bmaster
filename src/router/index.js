import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

const router = new Router ({
  mode: 'history',
  routes: [

    {
      path: '/contacts',
      component: function (resolve) {
        require(['@/components/contacts/contacts.vue'], resolve)
      },
      children: [
        {
          path: '/',
          components: {
            a: function (resolve) { require(['@/components/contacts/contactsListOption.vue'], resolve) },
            b: function (resolve) { require(['@/components/contacts/contactsList.vue'], resolve) }
          }
        },
        {
          path: '/contact/:no',
          components: {
            a: function (resolve) { require(['@/components/contacts/contactsListOption.vue'], resolve) },
            b: function (resolve) { require(['@/components/contacts/contactsList.vue'], resolve) }
          }
        }
      ]
    }

  ]
})

export default router
