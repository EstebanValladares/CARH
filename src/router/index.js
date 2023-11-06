import { createRouter, createWebHistory } from 'vue-router'
import { onAuthStateChanged } from 'firebase/auth'
import { useFirebaseAuth } from 'vuefire'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Regeneration.vue')
    },
    {
      path: '/thin',
      name: 'thin',
      component: () => import('../views/Thinking.vue')
    },
    {
      path: '/disc',
      name: 'disc',
      component: () => import('../views/Discovering.vue')
    },
    {
      path: '/maint',
      name: 'maint',
      component: () => import('../views/Maintaining.vue')
    },
    {
      path: '/us',
      name: 'us',
      component: () => import('../views/Us.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminLayout.vue'),
      meta:{ requiresAuth: true },
      children: [
        {
          path: '/admin/AdminUser',
          name: 'admin-user',
          component: () => import('../views/admin/AdminVue.vue'),
          meta:{ requiresAuth: true },
        },
        {
          path: '/admin/nuevo',
          name: 'new-thinking',
          component: () => import('../views/admin/NewThinking.vue'),
          meta:{ requiresAuth: true },
        },
        {
          path: '/admin/editar/:id',
          name: 'edit-thinking',
          component: () => import('../views/admin/EditThinking.vue'),
          meta:{ requiresAuth: true },
        },
      ]
    }
  ]
})
//validando si el link requiere autentificacion
router.beforeEach(async(to, from, next)=>{
  const requiresAuth = to.matched.some(url => url.meta.requiresAuth)
  //comprueba que el usuario este autentificado
  if(requiresAuth){
    try {
      await authenticateUser()
      next()
    } catch (error) {
      console.log(error)
      next({name: 'login'})
    }
  }else{
    //nos reedirige a una vista publica
    next()
  }
})
function authenticateUser(){
  const auth = useFirebaseAuth()
  return new Promise((resolve, reject) =>{
    const unsubscribe = onAuthStateChanged(auth, (user) =>{
      unsubscribe()
      if(user){
        resolve(user)
      }else{
        reject()
      }
    })
  })
}
export default router
