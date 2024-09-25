import Tags from '@/components/Tags'

interface Card {
  post: any
  className?: string
  spanClassName?: string
  nameBlock?: any
}

export function CardInfo({
  post,
  className = 'mt-7 text-[#9799A5] text-[17px] font-normal',
  spanClassName = 'flex items-center text-[12px] xl:text-[17px] font-inter',
  nameBlock = false,
}: Card) {
  function author() {
    const ex = 'Администратор'

    if (!post.hasOwnProperty('authors')) return ex
    if (post.authors.length === 0) return ex

    return post.authors[0].name
  }

  return (
    <div className={className}>
      Автор: {author()}
      <span className={`${spanClassName} card_info`}>
        {post.hasOwnProperty('publishedAt')
          ? new Date(post.publishedAt).toLocaleDateString('ru-RU')
          : new Date(post.createdAt).toLocaleDateString('ru-RU')}
        <span className="mx-4">|</span>
        <svg
          className="w-5 h-5 mr-1"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_96_5318)">
            <path
              d="M1.04541 9.1341C1.04541 9.1341 4.08121 3.0625 9.39386 3.0625C14.7065 3.0625 17.7423 9.1341 17.7423 9.1341C17.7423 9.1341 14.7065 15.2057 9.39386 15.2057C4.08121 15.2057 1.04541 9.1341 1.04541 9.1341Z"
              stroke="#9CA3AF"
              strokeWidth="1.21432"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.39379 11.4111C10.6513 11.4111 11.6706 10.3917 11.6706 9.13427C11.6706 7.8768 10.6513 6.85742 9.39379 6.85742C8.13632 6.85742 7.11694 7.8768 7.11694 9.13427C7.11694 10.3917 8.13632 11.4111 9.39379 11.4111Z"
              stroke="#9CA3AF"
              strokeWidth="1.21432"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_96_5318">
              <rect
                width="18.2148"
                height="18.2148"
                fill="white"
                transform="translate(0.286377 0.0273438)"
              />
            </clipPath>
          </defs>
        </svg>
        {post.hasOwnProperty('views') ? post.views.views : 0}
        <span className="mx-4">|</span>
        {post.words} слов
      </span>
      <div className="text-[#9799A5] mt-3 gap-2 flex flex-wrap"></div>
      <Tags
        data={post.tags}
        className="text-[#9799A5] mt-3 gap-2 flex flex-wrap"
        nameBlock={nameBlock}
      />
    </div>
  )
}

function getAuthor() {}
