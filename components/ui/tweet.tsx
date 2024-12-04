import { Suspense } from 'react';
import { type TweetProps, TweetSkeleton } from 'react-tweet';
import {
  type TwitterComponents as TwitterComponentsProps,
  TweetContainer,
  TweetHeader,
  TweetInReplyTo,
  TweetBody,
  TweetMedia,
  TweetInfo,
  TweetActions,
  QuotedTweet,
  enrichTweet,
} from 'react-tweet';
import { getTweet, type Tweet } from 'react-tweet/api';
import Image from 'next/image';

export const TweetCard = ({ fallback = <TweetSkeleton />, ...props }: TweetProps) => (
  <Suspense fallback={fallback}>
    <TweetContent {...props} />
  </Suspense>
);

const TweetContent = async ({ id, components, onError }: TweetProps) => {
  let tweet;

  if (id) {
    tweet = await getTweet(id).catch((err) => {
      if (onError) onError(err);
    });
  } else {
    tweet = undefined;
  }

  if (!tweet) return null;
  return <MyTweet tweet={tweet} components={components} />;
};

export const TwitterComponents: TwitterComponentsProps = {
  AvatarImg: (props) => <Image {...props} />,
  MediaImg: (props) => <Image {...props} fill unoptimized />,
};

export const MyTweet = ({
  tweet: t,
  components,
}: {
  tweet: Tweet;
  components?: TwitterComponentsProps;
}) => {
  const tweet = enrichTweet(t);
  return (
    <TweetContainer>
      <TweetHeader tweet={tweet} components={components} />

      {tweet.in_reply_to_status_id_str && <TweetInReplyTo tweet={tweet} />}

      <div className="flex flex-col md:flex-row">
        <div className="mb-4 pr-4">
          <TweetBody tweet={tweet} />
        </div>

        <div className="custom-tweet-container -mt-2">
          {tweet.mediaDetails?.length ? <TweetMedia tweet={tweet} components={components} /> : null}
        </div>
      </div>

      {tweet.quoted_tweet && <QuotedTweet tweet={tweet.quoted_tweet} />}

      <TweetInfo tweet={tweet} />
      <TweetActions tweet={tweet} />
    </TweetContainer>
  );
};
