<template>
    <div class="col-lg-4">
        <div class="card mb-3 border-0">
            <div class="row no-gutters">
                <div class="col-12">
                    <div class="d-flex flex-row">
                        <div class="card-body">
                            <h5 class="card-title text-left">REVIEW TRUYỆN</h5>
                            <ul class="review-item mb-0" v-for="item in reviewTruyen" :key="item.id"> 
                                <li class="d-flex flex-row news-item"> 
                                    <a :href=item.link :title=item.title>
                                    </a> 
                                    <h6 class="px-2">
                                        <a :href=item.link :title=item.title>{{item.title}}</a>
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
                    <div class="d-flex flex-row">
                        <div class="card-body">
                            <h5 class="card-title text-left">TOP TRUYỆN HAY </h5>
                            <ul class="review-item mb-0" v-for="item in topTruyenHay" :key="item.id"> 
                                <li class="d-flex flex-row news-item text-justify border-item"> 
                                    <div class="px-3 py-3 text-09 text-primary">
                                        <h3>{{item.id}}</h3>
                                    </div>
                                    <h6 class="py-3">
                                        <a :href=item.link :title=item.title>{{item.title}}</a>
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
                    <div class="d-flex flex-row">
                        <div class="card-body">
                            <h5 class="card-title text-left">TOP TRUYỆN MỚI ĐĂNG </h5>
                            <ul class="review-item mb-0" v-for="item in topTruyenMoiDang" :key="item.id"> 
                                <li class="d-flex flex-row news-item text-justify border-item"> 
                                    <div class="px-3 py-3 text-09 text-primary">
                                        <h3>{{item.id}}</h3>
                                    </div>
                                    <h6 class="py-3">
                                        <a :href=item.link :title=item.title>{{item.title}}</a>
                                    </h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  // name: "SlideBar",
  props: {
    msg: String
  },
  data() {
      return {
      reviewTruyen: [],
      topTruyenHay: [],
      topTruyenMoiDang: []
      }
  },
  mounted() {
  axios.get('/api/index').then((response) => {
    this.topTruyenHay = response.data['truyenngan']
    this.topTruyenMoiDang = response.data['truyendecu']
    this.reviewTruyen = response.data['truyenvip']
    this.truyenNgonTinh = response.data['truyenngontinh']
    this.truyenTienHiep = response.data['truyentienhiep']
    this.truyenTeen = response.data['truyenteen']
  })
}
};
</script>
<style scoped>
.news-item {
  height: 60px;
}
.review-item{
  height: 60px;
}
h6{
  font-size: 14px;
}
ul > li {
  list-style: none;
}
.border-item {
  height: 40px;
  border-top: 2px dashed #cfcfcf;
}
a {
  color: #2c3e50;
  text-decoration: none;
}
</style>
