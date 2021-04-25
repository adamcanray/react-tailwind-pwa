import React from 'react'
import {
  CardBasic,
  CardColored,
  CardWrapper
} from '../components/Cards'
import {
  MasonryContainerImages,
  MasonryContainerCards,
} from '../components/MasonryContainer'

const cards = [
  {
    title: 'Lt. Col.',
    text: `I inadvertently went to See's Candy last week (I was in the mall looking for phone repair), and as it turns out, See's Candy now charges a dollar -- a full dollar -- for even the simplest of their wee confection offerings. I bought two chocolate lollipops and two chocolate-caramel-almond things. The total cost was four-something. I mean, the candies were tasty and all, but let's be real: A Snickers bar is fifty cents. After this dollar-per-candy revelation, I may not find myself wandering dreamily back into a See's Candy any time soon.`,
  },
  {
    title: 'Commander',
    text: `It was difficult for him to admit he was wrong. He had been so certain that he was correct and the deeply held belief could never be shaken. Yet the proof that he had been incorrect stood right before his eyes. "See daddy, I told you that they are real!" his daughter excitedly proclaimed.`,
  },
  {
    title: 'Corporal',
    text: `Do you really listen when you are talking with someone? I have a friend who listens in an unforgiving way. She actually takes every word you say as being something important and when you have a friend that listens like that, words take on a whole new meaning.`,
  },
  {
    title: 'Countess',
    text: `She was in a hurry. Not the standard hurry when you're in a rush to get someplace, but a frantic hurry. The type of hurry where a few seconds could mean life or death. She raced down the road ignoring speed limits and weaving between cars. She was only a few minutes away when traffic came to a dead standstill on the road ahead.`,
  },
  {
    title: 'Prince',
    text: `Barbara had been waiting at the table for twenty minutes. it had been twenty long and excruciating minutes. David had promised that he would be on time today. He never was, but he had promised this one time. She had made him repeat the promise multiple times over the last week until she'd believed his promise. Now she was paying the price.`,
  },
  {
    title: 'Commander',
    text: `It was difficult for him to admit he was wrong. He had been so certain that he was correct and the deeply held belief could never be shaken. Yet the proof that he had been incorrect stood right before his eyes. "See daddy, I told you that they are real!" his daughter excitedly proclaimed.`,
  },
  {
    title: 'Dame',
    text: `Do you think you're living an ordinary life? You are so mistaken it's difficult to even explain. The mere fact that you exist makes you extraordinary. The odds of you existing are less than winning the lottery, but here you are. Are you going to let this extraordinary opportunity pass?`,
  },
  {
    title: 'Grand Master',
    text: `You know that tingly feeling you get on the back of your neck sometimes? I just got that feeling when talking with her. You know I don't believe in sixth senses, but there is something not right with her. I don't know how I know, but I just do.`,
  },
  {
    title: 'Commander',
    text: `It was difficult for him to admit he was wrong. He had been so certain that he was correct and the deeply held belief could never be shaken. Yet the proof that he had been incorrect stood right before his eyes. "See daddy, I told you that they are real!" his daughter excitedly proclaimed.`,
  },
  {
    title: 'Mayor',
    text: `It was their first date and she had been looking forward to it the entire week. She had her eyes on him for months, and it had taken a convoluted scheme with several friends to make it happen, but he'd finally taken the hint and asked her out. After all the time and effort she'd invested into it, she never thought that it would be anything but wonderful. It goes without saying that things didn't work out quite as she expected.`,
  },
  {
    title: 'Consul',
    text: `
    She didn't like the food. She never did. She made the usual complaints and started the tantrum he knew was coming. But this time was different. Instead of trying to placate her and her unreasonable demands, he just stared at her and watched her meltdown without saying a word.`,
  },
  {
    title: 'Commander',
    text: `It was difficult for him to admit he was wrong. He had been so certain that he was correct and the deeply held belief could never be shaken. Yet the proof that he had been incorrect stood right before his eyes. "See daddy, I told you that they are real!" his daughter excitedly proclaimed.`,
  },
]
const images = [
  {
    img_url: 'https://images.dog.ceo/breeds/weimaraner/n02092339_431.jpg'
  },
  {
    img_url: 'https://images.dog.ceo/breeds/leonberg/n02111129_17.jpg'
  },
  {
    img_url: 'https://images.dog.ceo/breeds/borzoi/n02090622_5890.jpg'
  },
  {
    img_url: 'https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_3090.jpg'
  },
  {
    img_url: 'https://images.dog.ceo/breeds/chow/n02112137_8212.jpg'
  },
  {
    img_url: 'https://images.dog.ceo/breeds/dingo/n02115641_7158.jpg'
  },
  {
    img_url: 'https://images.dog.ceo/breeds/bluetick/n02088632_2149.jpg'
  },
  {
    img_url: 'https://images.dog.ceo/breeds/weimaraner/n02092339_431.jpg'
  },
  {
    img_url: 'https://images.dog.ceo/breeds/bluetick/n02088632_1625.jpg'
  },
  {
    img_url: 'https://images.dog.ceo/breeds/dingo/n02115641_7158.jpg'
  },
  {
    img_url: 'https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_9369.jpg'
  },
  {
    img_url: 'https://images.dog.ceo/breeds/dachshund/dog-495133_640.jpg'
  },
  {
    img_url: 'https://images.dog.ceo/breeds/chow/n02112137_8212.jpg'
  },
  {
    img_url: 'https://images.dog.ceo/breeds/bluetick/n02088632_1625.jpg'
  },
]

function Masonry() {
  return (
    <div className="divide-y text-gray-700 dark:text-gray-400">
      <div className="py-10">
        <p className="text-center font-bold text-5xl mb-10">Masonry Cards</p>
        <MasonryContainerCards 
          columnGap="4" 
          columnCount="3"
        >
          {cards.map((e,i,a)=>{
            return (
              <CardWrapper className="w-full" key={i}>
                {i%2===0?(
                  <CardBasic
                    title={e.title}
                    text={e.text}
                  />
                ):(
                  <CardColored
                    title={e.title}
                    text={e.text}
                    type="carrot"
                    typeRandom
                  />
                )}
              </CardWrapper>
            )
          })}
        </MasonryContainerCards>
      </div>
      <div className="py-20">
        <p className="text-center font-bold text-5xl mb-10">Masonry Images</p>
        <MasonryContainerImages>
          {images.map((e,i,a)=>{
            return (
              <div key={i}>
                <img src={e.img_url} alt={e.img_url}/>
              </div>
            )
          })}
        </MasonryContainerImages>
      </div>
    </div>
  );
}

export default Masonry
