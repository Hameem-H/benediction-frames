import book1 from "../assets/living-under-an-open-heaven.jpg";
import book2 from "../assets/taking-but-saying-good-stuff.jpg";
import book3 from "../assets/ripples-of-holiness.jpg";

export interface Book {
  title: string;
  image: string;
  description: string;
}

export interface Play {
  title: string;
  youtubeId: string;
}

export const books: Book[] = [
  {
    title: "Living Under an Open Heaven",
    image: book1,
    description: "What if the blessings of God are not something you have to chase—but something God intends to have chase you? Living Under an Open Heaven explores the extraordinary promises found in Deuteronomy 28:1–14, where God describes a life of blessing, provision, protection, victory, abundance, and divine favor that flows from walking in obedience to Him. The passage culminates in the powerful image of God opening His heavenly storehouse and blessing the work of His people's hands. But this book is about more than material blessing. It is about positioning. Pastor Benedict A. Dorsey challenges readers to understand that obedience does not earn God's love; rather, obedience positions us to walk in what God has already promised. Through biblical teaching, practical insight, and personal testimony, he examines what it means to trust God when the blessing has not yet appeared, to remain faithful when circumstances contradict the promise, and to recognize God's hand even in difficult seasons. Living Under an Open Heaven speaks to the person who has prayed, waited, believed—and wondered when their season would come. It reminds us that God's promises have not expired, His provision has not been exhausted, and His timing has not failed. There are victories God has already prepared. Doors He has already determined to open. Provision already assigned to your purpose. And blessings that may be closer than you realize. The question is not simply, “Will God bless me?” The deeper question is, “Am I positioned to receive what God has promised?” You were never created merely to survive beneath the clouds. God is calling you to discover what it means to live under an open heaven.",
  },
  {
    title: "B.A.D. Talking but Saying Good Stuff!",
    image: book2,
    description: "What does it really mean to become a better Christian—not just on Sunday, but in the everyday places where faith is tested? B.A.D. Talking but Saying Good Stuff! is an honest, practical, and encouraging journey toward spiritual maturity. Benedict A. Dorsey writes for Christians who genuinely love God but also know what it feels like to struggle, stumble, question themselves, and sometimes fall short of the person they know God has called them to be. Rather than presenting Christianity as a life of instant perfection, the book embraces the reality that spiritual growth is a process. We fail. We learn. We get back up. And through it all, God continues shaping us. With straightforward teaching, personal reflection, humor, and the kind of plain talk that has characterized Dorsey's ministry, B.A.D. Talking but Saying Good Stuff! challenges readers to examine their faith, their choices, their relationships, and their spiritual progress—not by comparing themselves with other people, but by looking toward the ultimate standard: Jesus Christ. Part devotional, part journal, and part spiritual-growth guide, this book isn't written for people who have already arrived. It's for people who are still becoming. Because being a Christian doesn't mean you never struggle. It means you don't stop growing.",
  },
  {
    title: "Ripples of Holiness",
    image: book3,
    description: "One life surrendered to God can touch another life. That life can touch another. And the ripple can continue long after we are gone. Ripples of Holiness is an invitation to rediscover holiness not simply as a religious doctrine, but as a way of living that allows the presence of God to move through ordinary people and ordinary moments. Like a pebble dropped into still water, a single decision to obey God can create ripples that extend far beyond the place where they began. A prayer whispered in faith. A choice to forgive. An act of kindness no one applauds. A decision to remain faithful when compromise would be easier. We may never know how far those ripples travel. Holiness is not about appearing perfect. It is about belonging completely to God—allowing Him to shape our character, our choices, our relationships, and ultimately the influence our lives have upon others. Throughout Scripture, God calls His people to be set apart for His purposes. That holiness is never meant to remain hidden. It becomes visible in the way we love, serve, forgive, endure, give, and obey. Ripples of Holiness challenges readers to consider a powerful possibility: perhaps the greatest impact of your life will not be something you accomplish, but something you begin. Something your children carry forward. Something a person you encouraged never forgets. Something God does through someone you touched. You may only see the pebble fall. God sees where every ripple goes. And sometimes, the smallest act of obedience can travel farther than anyone can measure. Your life can leave ripples. Let them be ripples of holiness.",
  },
];

// export const plays: Play[] = [
//   {
//     title: "B.A.D. Talking Good Stuff ",
//     youtubeId: "S0kMPbyOigw",
//   }

// ];
