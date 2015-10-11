# LifeLongPlaylist
================
[Meteor hackathon
2015](http://info.meteor.com/blog/announcing-the-2015-meteor-global-distributed-hackathon)

#Participants
- [Alex Davis](https://www.linkedin.com/in/alexjdavis)
- Mansur Suleman
- Oleg Iskra
- Pawel Mordaszewski

#Idea
Our idea is simple yet neat. I want to create one personal playlist for everybody that will last forever. Any song once added to the list will remain there forever. "It's stupid!" will say you, and you will be mistaken. The small secret here is how is this list organized and how is it changing with time. You may think about "infinite playlist" as about your personal chart (like on radio). If you like song you play it more often. The reason can be different: it may be a new song that you heard recently with your friends, you have some memories related to that song that you want to refresh, your current mood just perfectly fit with it, or any other reason that drive you listen this song more often. We need to prioritize songs in our playlist without overloading listener with manual sorting. But how can we automatically create the playlist that will reflect one in our head?

Initially your "infinite playlist" is empty and service main page is just an empty search form. You may find whatever song / artist / album you want to play and play it. Every time the song was picked up by the listener manually it goes to the top of the list. The magic is happening when you don't want to spend your time adding new songs and simply want to play songs from your playlist. They are playing based on the rank. Songs that are closer to the top of the list are ranked higher and are played more frequently than ones closer to the bottom that are played really rare. If you are listening song from the very beginning to the very end than you are probably satisfied with it's playing frequency (for example 1 time per 10 other songs). If you are not satisfied than there are two possibilities: first - you want to play it more frequently, second - you want to play it less. Let's consider latter first. 

Have you ever had this feeling when you listen to the really annoying song on radio and want to skip this song? With our "infinite playlist" you can do so. You should press "next" and next random song will be played based on the rank. But what is the most important, that the song you skipped will be slightly decreased in rank. Actually it will go down a little bit. It will keep playing and will play eventually but less frequently. If you are still tired of this song you will sooner or later skip it again. This time it will go down a little bit further and therefore will be playing even less frequently.

You are probably having question: "Why should I listen to the songs that are at the bottom of the list if I don't want to?". And that is the time when math and probability come into the stage. Eventually (remember that we are creating "infinite playlist") you will build up really long playlist, let us say 1000 songs. If the rank of each higher song is 2 times more than the rank of the lower than probability that the lowest song will be played is only 1/1.000.000. Even if an average song length is only 3 minutes (real average song length is slightly longer than that) last song will be played once in 1.000.000 * 3 = 3.000.000 minutes that is 3.000.000 / 60 / 24 / 365 = 5,7 years if you are listening your songs 24x7 that is impossible. According to the research average american listen to the music 4 hours each day. This will give us that last song in 1000 songs playlist will be played once in 3.000.000 / 60 / 24 / 365 * 24 / 4 ~ 34 years. If you are going to live a century it's only 3 times during your whole life. 

But what if You want some song to be played more often? Just start it manually! It will go to the top of the list, and will be playing more frequently again. That's it. Now you may read it again to fully understand. 

That's the service that we want to build during hackathon using Meteor. And we have free space for two additional people in out team. You may be one of them. Just write us a message.
