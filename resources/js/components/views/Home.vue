<template>
  <div class="home">
    <ContactComponent></ContactComponent>
    <NavigationComponent></NavigationComponent>
    <div class="main-body height-100vh pt-4">
      <div class="container">
        <div class="row m-0 p-0">
          <div class="col-lg-8 pr-0">
            <div class="card mb-3 border-0">
              <div class="row no-gutters">
                <div class="col-12">
                  <div class="card-body">
                    <h5 class="card-title text-left">TRUYỆN ĐỀ CỬ</h5>
                    <div>
                      <ul class="d-flex row mb-0">
                        <li  class="col-md-3 col-sm-6 my-3" v-for="item in truyenDeCu" :key="item.id">
                          <a :href=item.link :title=item.title>
                            <img :src=item.src :alt=item.title>
                          </a> 
                          <h6 class="card-text">
                            <a :href=item.link>{{item.text}}</a>
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3 border-0">
              <div class="row no-gutters">
                <div class="col-12">
                  <div class="card-body">
                    <h5 class="card-title text-left">TRUYỆN VIP</h5>
                    <div>
                      <ul class="d-flex row mb-0">
                        <li  class="col-md-3 col-sm-6 my-3" v-for="item in truyenVip" :key="item.id">
                          <a :href=item.link :title=item.title>
                            <img :src=item.src :alt=item.title>
                          </a> 
                          <h6 class="card-text">
                            <a :href=item.link>{{item.text}}</a>
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3 border-0">
              <div class="row no-gutters">
                <div class="col-12">
                  <div class="card-body">
                    <h5 class="card-title text-left">TRUYỆN MỚI CẬP NHẬT</h5>
                    <div class=" d-flex flex-column">
                      <div class="d-flex flex-row my-2">
                        <div class="mx-2" @click="tienhiep = false, ngontinh= true, teen = false">
                          <button type="button" class="btn btn-info">Ngôn Tình</button>
                        </div>
                        <div class="mx-2" @click="tienhiep = true, ngontinh= false, teen = false">
                          <button type="button" class="btn btn-info">Tiên Hiệp</button>
                        </div>
                        <div class="mx-2" @click="tienhiep = false, ngontinh= false, teen = true">
                          <button type="button" class="btn btn-info">Truyện Teen</button>
                        </div>
                      </div>
                      <div class="d-flex flex-column">
                          <ul class="py-1 my-0" v-if="ngontinh">
                            <li v-for="item in truyenNgonTinh" :key="item.id">
                              <div class="d-flex flex-row border-item">
                                <h6 class="card-text col-8 text-left my-0 pt-3">
                                <a :href=item.link>{{item.text}}</a>
                                </h6>
                                <div class="col-4 d-flex text-08 my-0 pt-3">
                                  <p class="mx-2">{{item.chuong}}</p>
                                  <p class="mx-2">{{item.time}}</p>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <ul class="py-1 my-0" v-if="tienhiep">
                            <li v-for="item in truyenTienHiep" :key="item.id">
                              <div class="d-flex flex-row border-item">
                                <h6 class="card-text col-8 text-left my-0 pt-3">
                                <a :href=item.link>{{item.text}}</a>
                                </h6>
                                <div class="col-4 d-flex text-08 my-0 pt-3">
                                  <p class="mx-2">{{item.chuong}}</p>
                                  <p class="mx-2">{{item.time}}</p>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <ul class="py-1 my-0" v-if="teen">
                            <li v-for="item in truyenTeen" :key="item.id">
                              <div class="d-flex flex-row border-item">
                                <h6 class="card-text col-8 text-left my-0 pt-3">
                                <a :href=item.link>{{item.text}}</a>
                                </h6>
                                <div class="col-4 d-flex text-08 my-0 pt-3">
                                  <p class="mx-2">{{item.chuong}}</p>
                                  <p class="mx-2">{{item.time}}</p>
                                </div>
                              </div>
                            </li>
                          </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-3 border-0">
              <div class="row no-gutters">
                <div class="col-12">
                  <div class="card-body">
                    <h5 class="card-title text-left">TRUYỆN FULL</h5>
                    <div>
                      <ul class="d-flex row mb-0">
                        <li class="col-md-3 col-sm-6 my-3" v-for="item in truyenFull" :key="item.id">
                          <a :href=item.link :title=item.title>
                            <img :src=item.src :alt=item.title>
                          </a> 
                          <h6 class="card-text">
                            <a href="">{{item.text}}</a>
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3 border-0">
              <div class="row no-gutters">
                <div class="card-body">
                <h5 class="card-title text-left">TRUYỆN NGẮN</h5>
                  <div class="d-flex row">
                    <div class="col-md-6 col-sm-12 d-flex align-items-center justify-content-center py-5">
                      <a href="#">
                        <img src="../assets/img/logo.png">
                      </a>
                    </div>
                    <div class="d-flex flex-column col-md-6 col-sm-12 text-left">
                      <ul class="review-item mb-0" v-for="item in truyenNgan" :key="item.id"> 
                        <li class="d-flex flex-row news-item"> 
                          <a :href=item.link :title=item.title>
                            <img :src=item.src :alt=item.title>
                          </a> 
                          <h6 class="pl-2">
                            <a :href=item.link :title=item.title>{{item.text}}</a>
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SlideBar></SlideBar>
        </div>
      </div>
    </div>
    <div class="container-fluid py-4 second-background">
      <div class="container">
        <div class="row m-0 p-0">
          <div class="col-12 m-0 p-0">
            <FooterComponent></FooterComponent>
          </div>
        </div>
      </div>
    </div>
      <BackgroundComponent></BackgroundComponent>
  </div>
</template>

<script>

import NavigationComponent from "../components/BackgroundComponent";
import FooterComponent from "../components/ContactComponent";
import BackgroundComponent from "../components/FooterComponent";
import ContactComponent from "../components/NavigationComponent";
import SlideBar from "../components/SlideBar";

export default {
  name: "home",
  components: {
    NavigationComponent,
    FooterComponent,
    BackgroundComponent,
    ContactComponent,
    SlideBar
  },
  data() {
    return {
      truyenNgan: [],
      truyenDeCu: [],
      truyenVip: [],
      ngontinh: true,
      tienhiep: false,
      teen: false,
      truyenNgonTinh: [],
      truyenTienHiep: [],
      truyenTeen: [],
      truyenFull: []
  };
}
,
mounted() {
  axios.get('/api/index').then((response) => {
    this.truyenFull = response.data['truyenfull']
    this.truyenNgan = response.data['truyenngan']
    this.truyenDeCu = response.data['truyendecu']
    this.truyenVip = response.data['truyenvip']
    this.truyenNgonTinh = response.data['truyenngontinh']
    this.truyenTienHiep = response.data['truyentienhiep']
    this.truyenTeen = response.data['truyenteen']
  })
}
};
</script>
<style scoped>

ul > li {
  list-style: none;
}
.border-item {
  border-top: 2px dashed #cfcfcf;
}
a {
  color: #2c3e50;
  text-decoration: none;
}
</style>
// {
//           link: "/truyen",
//           text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
//           src: "/images/logo.png"
//         },
//         {
//           link: "/truyen",
//           text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
//           src: "/images/logo.png"
//         },
//         {
//           link: "/truyen",
//           text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
//           src: "/images/logo.png"
//         },
//         {
//           link: "/truyen",
//           text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
//           src: "/images/logo.png"
//         }