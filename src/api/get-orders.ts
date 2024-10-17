import { api } from '@/lib/axios'

export interface GetOrdersQuery {
  pageIndex?: number | null
}

export interface GetOrderResponse {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}
export async function getOrders({ pageIndex }: GetOrdersQuery) {
  const response = await api.get<GetOrderResponse>('/orders', {
    params: {
      pageIndex,
    },
  })

  return response.data
}
