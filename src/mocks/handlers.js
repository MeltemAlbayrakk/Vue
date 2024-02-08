import { http, HttpResponse } from 'msw'
 
export const handlers = [  
  
    http.get('/message', () => {
    return HttpResponse.json(console.log("calıstı"))
    console.log('Captured a "GET /posts" request')
 },http.post('/posts', () => {
    console.log('Captured a "POST /posts" request')
  }),
  http.delete('/posts/:id', ({ params }) => {
    console.log(`Captured a "DELETE /posts/${params.id}" request`)
  })
 
 
 ),]