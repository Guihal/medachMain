import Redis from 'ioredis'

const options: any = {
  lazyConnect: true,
  connectTimeout: 15000,
  retryStrategy: (times) => Math.min(times * 30, 1000),
  reconnectOnError(error) {
    console.log(error)
  },
}

export const redis: any = new Redis('redis://localhost:6379', options)
