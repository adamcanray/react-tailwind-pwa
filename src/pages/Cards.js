import React from 'react'
import {
  CardBasic,
  CardColored,
  CardWrapper
} from '../components/Cards'
import Alert from '../components/Alert'

function Masonry() {
  return (
    <div className="divide-y text-gray-700 dark:text-gray-400">
      <div className="py-10">
        <p className="text-left font-bold text-5xl mb-10">Basic Card</p>
        <Alert text="Width of a card is based on you, all you need is just pass className into CardWrapper!" type="cherry" />
        <div className="mt-10">
          <CardWrapper className="mb-4 w-96">
            <CardBasic title="Hello World" text="a `w-96` card - Have a nice day" />
          </CardWrapper>
          <CardWrapper className="mb-4 w-1/2">
            <CardBasic title="Hello World" text="a `w-1/2` card - Have a nice day" />
          </CardWrapper>
          <CardWrapper className="mb-4">
            <CardBasic title="Hello World" text="a full width card - Have a nice day" />
          </CardWrapper>
        </div>
      </div>
      <div className="py-10">
        <p className="text-left font-bold text-5xl mb-10">Colored Card</p>
        <Alert text="Similar as Basic Card, only with a few additions!" type="banana" />
        <div className="mt-10">
          <CardWrapper className="mb-4 w-96">
            <CardColored title="Hello World" text="a `w-96` card with default color type - Have a nice day" />
          </CardWrapper>
          <CardWrapper className="mb-4 w-1/2">
            <CardColored title="Hello World" text="a `w-1/2` card with a carrot color type - Have a nice day" type="carrot" />
          </CardWrapper>
          <CardWrapper className="mb-4">
            <CardColored title="Hello World" text="a full width card with a cucumber color type - Have a nice day" type="cucumber" />
          </CardWrapper>
          <CardWrapper className="mb-4">
            <CardColored title="Hello World" text="a full width card with a typeRandom - Have a nice day" typeRandom />
          </CardWrapper>
        </div>
      </div>
    </div>
  );
}

export default Masonry
