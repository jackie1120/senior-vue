export default [
  {
    path: '/examples',
    name: 'examples',
    component: () => import('@/views/layout/example.vue'),
    children: [
      {
        path: '1',
        name: 'example-1',
        component: () => import('@/views/examples/example1')
      },
      {
        path: '2',
        name: 'example-2',
        component: () => import('@/views/examples/example2')
      },
      {
        path: '3',
        name: 'example-3',
        component: () => import('@/views/examples/example3')
      },
      {
        path: '4',
        name: 'example-4',
        component: () => import('@/views/examples/example4')
      },
      {
        path: '5',
        name: 'example-5',
        component: () => import('@/views/examples/example5')
      },
      {
        path: '6',
        name: 'example-6',
        component: () => import('@/views/examples/example6')
      }
    ]
  }
]
