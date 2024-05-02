<template>
    <PageTitle title="Our Programs" />
    <div class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4 my-16 container mx-auto">
      <Program v-for="(data, x) in programms" :key="x" :program="data" />
    </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue';
import Program from '../components/Program.vue';
import img1 from '../assets/1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/contribution_1.jpg';
import img4 from '../assets/help-gas.jpg';
import img5 from '../assets/hope_1.jpg';
import img6 from '../assets/table_1.jpg';
import img7 from '../assets/lady_talk_1.jpg';
import img8 from '../assets/special_1.jpg';
import news_1 from '../assets/news_1.jpg';
import cultural_1 from '../assets/cultural_1.jpg';

export default {
    components: {
      PageTitle,
      Program,
    
    },
    data() {
        return {
            programms: [
                {
                  image: img4,
                    name: "Engineers Talk:: Help the Nation",
                    description: "To include guidance to the nation on various safety challenges, incorrect technological principles, and rumors. This program aids the country in becoming acquainted with current technological challenges as well as identifying and implementing protection steps efficiently and efficiently.",
                    url: "help-the-nation"
                },
                {
                  image: img1,
                    name: "Engineers Adda:: Encourage Entrepreneurship",
                    description: "This type of program inspires new engineers to become entrepreneurs by hearing the success stories of engineer entrepreneurs. For fresh engineers and learners, discovering their challenge-facing and resolving stories sounds motivational and inspirational.",
                    url: "encourage-entrepreneurship"
                },
                {
                  image: img2,
                    name: "Engineers Talk:: Technical Know-How",
                    description: "The technical aspects raise certain concerns in the minds of the general public. Such technical explanations and discussions are very beneficial for engineers technical knowledge growth as well as for the mass publics easy learning experience of simple ideas on various technical issues",
                    url: "technical-know-how"
                },
                {
                  image: img7,
                    name: "Engineers Adda:: Lady Talk",
                    description: "Engineers lives are demanding, but womens lives are even more so because a lady equates to a mother. How would she manage to be an engineer, a mother, and a wife at the same time? These success stories inspire women to pursue engineering careers.",
                    url: "lady-talk"
                },
                {
                  image: img3,
                    name: "Engineers for Bangladesh:: Contribution Stories",
                    description: "Some technologies bring about revolutionary shifts in peoples’ lives and those stories deserve appreciation. Due to easy accessibility people simply enter our Live program and leave a message expressing their gratitude.",
                    url: "contribution-stories"
                },
                {
                  image: img8,
                    name: "Engineers Adda:: Special Episode",
                    description: "This section is not limited to a defined domain that is sometimes beyond expectation. It is decorated with occasional, special attraction for the audience.",
                    url: "special-episode"
                },
                {
                  image: img6,
                    name: "Engineers Adda:: Talk Table",
                    description: "Engineers precision and morale can be  bolstered by technical discussions, debates, and question-and-answer sessions. In a nutshell, Talk-Table is just as the name implies. Point of interest for attracting lovers.",
                    url: "talk-table"
                },
                {
                  image: img5,
                    name: "Engineers Adda:: Hope Talk",
                    description: "Hope is Life; Life is Hope! People appreciate knowing about how things have changed, and hope makes them happy. Without a question, Hope Talk is fun for people from all walks of life.",
                    url: "hope-talk"
                },
                {
                  image: news_1,
                    name: "VOE:: Engineers News",
                    description: "whats going on in the engineering community, in companies, and in engineering schools; Technical developments, construction news, engineer welfare, and engineer integrity issues are all covered in this section. Engineers news is made up of all of these aspects.",
                    url: "engineers-news"
                },
                {
                  image: cultural_1,
                    name: "Engineers Adda:: Cultural Hour",
                    description: "Engineers must, in fact, engage in recreational activities to break the 9 to 5 cycle. Culture programs can be a great way to increase the intimacy among the community. ",
                    url: "cultural-hour"
                }
                // {
                //   image: img6,
                //     name: "VOE Adda:: Guest Hour",
                //     description: "The guest hour creates an opportunity to listen about lifestyle, culture, spiritual & moral suggestions, as well as health tips, religious speeches of people from every sphere.",
                //     url: "guest-hour"
                // }
            ]
        };
    },
    components: { PageTitle, Program }
}
</script>

<style>

</style>
