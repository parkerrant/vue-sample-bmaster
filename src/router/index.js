import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

const router = new Router ({
  mode: 'history',
  routes: [

    {
      path: '/contacts',
      component: function (resolve) {
        require(['@/components/contacts/Index.vue'], resolve)
      },
      children: [
        {
          path: '/',
          components: {
            top: function (resolve) { require(['@/components/contacts/ContactsOption.vue'], resolve) },
            middle: function (resolve) { require(['@/components/contacts/Contacts.vue'], resolve) }
          }
        },
        {
          path: 'contact/add',
          components: {
            bottom: function (resolve) { require(['@/components/contacts/ContactAdd.vue'], resolve) }
          }
        },
        {
          path: 'contact/:no',
          components: {
            bottom: function (resolve) { require(['@/components/contacts/Contact.vue'], resolve) }
          }
        }
      ]
    }

  ]
})

export default router
