<template>
  <div id="index">
    <div class="contentBox indexBox">
      <div class="indexLeft">
        <div class="bannerBox">
          <bannerswiper/>
        </div>
        <div class="newsBox">
          <div class="newsTitle">
            <img src="@/assets/images/newsIcon.png" class="newsicon">
            <p>News</p>
            <img src="@/assets/images/arrowRightIcon.png" class="arrowright">
          </div>
          <ul class="newsUl">
            <li v-for="(item,key) in 4" :key="key">
              <div class="newsLeft">
                <p class="p1">11</p>
                <p class="p2">2019Mar</p>
              </div>
              <div class="newsRight">
                <p class="title">
                  <router-link to="/">Prof.Teck-Peng Loh Visited Our Lab.</router-link>
                </p>
                <div class="newsMain">
                  <div class="newsMainImgBox">
                    <img src="@/assets/images/indexbgImg.png">
                  </div>
                  <div class="newsMainTextBox">
                    <p>Professor Teck-Peng Loh visited our ​group on March 11tProfessor Teck-Peng Loh visited our ​group on MProfessor Teck-Peng Loh visited our ​group on MProfessor Teck-Peng Loh visited our ​group on MProfessor Teck-Peng Loh visited our ​group on MProfessor Teck-Peng Loh visited our ​group on Mh. 2019, and was invited to give us an report.</p>
                  </div>
                </div>
                <div class="readMore">
                  <p>
                    <img src="@/assets/images/eyeIcon.png">
                    <span>200</span>
                    <router-link to="/">More+</router-link>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="indexRight">
        <div class="userInfo">
          <div class="userimgbox">
            <img src="@/assets/images/indexbgImg.png" class="userimg">
          </div>
          <p class="p1 mt-20">Wei Yi</p>
          <div class="mt-15">
            <img src="@/assets/images/emailIcon.png">
            <img src="@/assets/images/telIcon.png" class="ml-30">
          </div>
          <p class="p2 mt-20">Shanxi Normal University</p>
          <p class="p2 mt-15">School of Chemistry and Chemical Engineering</p>
          <p class="p2 mt-15">Tel: 020-3710 3193</p>
          <p class="p2 mt-15">Email: yiwei@gzhmu.edu.cn</p>
        </div>
        <div class="hostArticles">
          <div class="titletop">
            <img src="@/assets/images/hostIcon.png">
            <p>Hot articles</p>
          </div>
          <ul class="articlesList">
            <li v-for="(item,key) in articlesList" :key="key">
              <div class="articlesimgBox">
                <img :src="item.urllingk" class="articlesimg">
              </div>
              <div class="articlesText">
                <p class="p1">{{item.title}}</p>
                <p class="p2">{{item.date}}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="linksBox">
          <div class="titletop">
            <img src="@/assets/images/linksIcon.png" class="linksImg">
            <p>Links</p>
          </div>
          <ul class="linksUl">
            <li v-for="(item,key) in linksList" :key="key">
              <router-link :to="item.urllink">{{item.text}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/css/index.less";
import bannerswiper from '@/components/bannerswiper.vue'
require("swiper/dist/css/swiper.css");
const articlesList = [
  {
    urllingk: require("@/assets/images/indexbgImg.png"),
    title:
      "(Times Cited > 1350) C–C, C–O and(Times Cited > 1350) C–C, C–O and(Times Cited > 1350) C–C, C–O and(Times Cited > 1350) C–C, C–O and",
    date: "February,19,2019"
  },
  {
    urllingk: require("@/assets/images/indexbgImg.png"),
    title:
      "(Times Cited > 1350) C–C, C–O and(Times Cited > 1350) C–C, C–O and(Times Cited > 1350) C–C, C–O and(Times Cited > 1350) C–C, C–O and",
    date: "February,19,2019"
  },
  {
    urllingk: require("@/assets/images/indexbgImg.png"),
    title:
      "(Times Cited > 1350) C–C, C–O and(Times Cited > 1350) C–C, C–O and(Times Cited > 1350) C–C, C–O and(Times Cited > 1350) C–C, C–O and",
    date: "February,19,2019"
  },
  {
    urllingk: require("@/assets/images/indexbgImg.png"),
    title:
      "(Times Cited > 1350) C–C, C–O and(Times Cited > 1350) C–C, C–O and(Times Cited > 1350) C–C, C–O and(Times Cited > 1350) C–C, C–O and",
    date: "February,19,2019"
  }
];
const linksList = [
  { text: "MOST", urllink: "/" },
  { text: "NSFC", urllink: "/" },
  { text: "SNNU", urllink: "/" },
  { text: "Organic Faculty in US", urllink: "/" },
  { text: "Organic Faculty in China", urllink: "/" },
  { text: "CHEM.SNNU", urllink: "/" },
  { text: "Sci-Finder", urllink: "/" },
  { text: "Web of Science", urllink: "/" },
  { text: "X-MOL", urllink: "/" },
  { text: "Wiley", urllink: "/" },
  { text: "ACS", urllink: "/" }
];
export default {
  components: {
      bannerswiper,
    },
  data() {
    return {
      articlesList: articlesList,
      linksList: linksList,
    };
  }
};
</script>
 