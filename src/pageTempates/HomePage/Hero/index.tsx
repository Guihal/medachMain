import { AnimatedBlock } from './AnimatedBlock'

import { AdvertisementCard } from './Сards/AdvertisementCard'
import { ArticlesCard } from './Сards/ArticlesCard'
import { EditorsChoiceCard } from './Сards/EditorsChoiceCard'
import { EventCard } from './Сards/EventCard'
import { InfographicsCard } from './Сards/InfographicsCard'
import { LastMaterialCard } from './Сards/LastMaterialCard'
import { NewsCard } from './Сards/NewsCard'
import { PodcastsCard } from './Сards/PodcastsCard'
import { TopMaterialsCard } from './Сards/TopMaterialsCard'
import { VacancyCard } from './Сards/VacancyCard'
import { VideosCard } from './Сards/VideosCard'

export function Hero() {
  return (
    <section className="wrapper flex-center text-white relative transition-all duration-300">
      <div className="grid-cards">
        <LastMaterialCard />
        <EditorsChoiceCard />
        <TopMaterialsCard />
        <NewsCard />
        <InfographicsCard />
        <AdvertisementCard />
        <ArticlesCard />
        <PodcastsCard />
        <VideosCard />
        <VacancyCard />
        <EventCard />
      </div>
      <AnimatedBlock />
    </section>
  )
}
