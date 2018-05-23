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
            a: function (resolve) { require(['@/components/contacts/ContactsOption.vue'], resolve) },
            b: function (resolve) { require(['@/components/contacts/Contacts.vue'], resolve) }
          }
        },
        {
          path: '/contact/:no',
          components: {
            a: function (resolve) { require(['@/components/contacts/ContactsOption.vue'], resolve) },
            b: function (resolve) { require(['@/components/contacts/Contacts.vue'], resolve) },
            c: function (resolve) { require(['@/components/contacts/popup/Contact.vue'], resolve) }
          }
        },
        {
          path: '/contact/add',
          components: {
            a: function (resolve) { require(['@/components/contacts/ContactsOption.vue'], resolve) },
            b: function (resolve) { require(['@/components/contacts/Contacts.vue'], resolve) },
            c: function (resolve) { require(['@/components/contacts/popup/ContactAdd.vue'], resolve) }
          }
        },
      ]
    }

  ]
})

export default router
