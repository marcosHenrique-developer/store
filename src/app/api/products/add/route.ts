import data from '../data.json'

export async function POST() {
  return Response.json(data.products)
}
