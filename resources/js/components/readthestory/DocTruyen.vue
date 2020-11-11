<template>
  <div class="doctruyen">
    <NavigationComponent></NavigationComponent>
    <div class="main-body height-100vh pt-4">
      <div class="container">
        <div class="row m-0 p-0">
          <div class="col-12 pr-0">
            <div class="card mb-3 border-0">
              <div class="row no-gutters">
                <div class="card-body">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Trang Chủ</a></li>
                    
                    <li class="breadcrumb-item"><a href="/truyen-xuyen-khong/">Xuyên Không</a></li>
                    
                    <li class="breadcrumb-item"><a :href=truyen.link>{{truyen.name}}</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{{chap.title}}</li>
                  </ol>
                </div>
                <div class="wiki-content text-left" id="id_chap_content">
                    <h1 class="chapter-title"> Chương: {{chap.title}}</h1>
                    <ul class="list-info list-unstyled d-flex flex-row">
                        <li><a :href=truyen.link><i class="fas fa-book"></i>{{truyen.name}}</a></li>
                        <li><small  class="text-muted text-08"><i class="far fa-file-word ml-3"></i> 2,463 Chữ </small> </li>
                        <li><small  class="text-muted text-08"><i class="far fa-clock ml-3"></i> 22:54 09/04/2020 </small></li>
                    </ul>

                    <div class="d-flex">
                      <div class="fb-like fb_iframe_widget" data-href="https://truyenyy.vn/truyen/do-de-cua-ta-deu-la-trum-phan-dien-dich/" data-width="600px" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="false" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=376408899112473&amp;container_width=0&amp;href=https%3A%2F%2Ftruyenyy.vn%2Ftruyen%2Fdo-de-cua-ta-deu-la-trum-phan-dien-dich%2F&amp;layout=button_count&amp;locale=vi_VN&amp;sdk=joey&amp;share=false&amp;show_faces=true&amp;size=small&amp;width=600px"><span style="vertical-align: bottom; width: 76px; height: 20px;"><iframe name="ff11cafbcf336" height="1000px" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.11/plugins/like.php?action=like&amp;app_id=376408899112473&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df22889ed436e0f4%26domain%3Dtruyenyy.vn%26origin%3Dhttps%253A%252F%252Ftruyenyy.vn%252Ff107ed4ed6d3148%26relation%3Dparent.parent&amp;container_width=0&amp;href=https%3A%2F%2Ftruyenyy.vn%2Ftruyen%2Fdo-de-cua-ta-deu-la-trum-phan-dien-dich%2F&amp;layout=button_count&amp;locale=vi_VN&amp;sdk=joey&amp;share=false&amp;show_faces=true&amp;size=small&amp;width=600px" style="border: none; visibility: visible; width: 76px; height: 20px;" class=""></iframe></span></div>
                    </div>
                    <div class="inner" style="font-size: 1em; line-height: 1.7em;">
                      <div>
                        {{chap.content}}
                      </div>
                    </div>
                    <div class="text-center mt-2">
                      <a href="/vip/" target="_blank" role="button" class="btn btn-outline-danger mx-2" style="border-radius: 19px;"><i class="fas fa-crown"></i> Nạp TLT Để Đọc Chất Lượng Hơn</a>
                      <a href="/truyen/do-de-cua-ta-deu-la-trum-phan-dien-dich/ung-ho/" target="_blank" role="button" class=" mx-2 btn btn-outline-success" style="border-radius: 19px;"><i class="fas fa-hand-holding-heart"></i> Ủng Hộ TLT</a>
                      <a href="/truyen/do-de-cua-ta-deu-la-trum-phan-dien-dich/de-cu/add/" target="_blank" role="button" class=" mx-2 btn btn-success" style="border-radius: 19px;">Gửi Đề Cử</a>
                      <a id="id_btn_push_gt" role="button" class="btn btn-warning mx-2" style="border-radius: 19px; color: #212529 !important;">Đẩy Kim Phiếu</a>
                    </div>
                </div>  
              </div>  
            </div>
            <div class="card mb-3 border-0">
              <div class="row no-gutters">
                <div class="col-12">
                  <div class="card-body">
                    <h5 class="card-title text-left">LỜI BÌNH TỪ ĐỌC GIẢ</h5>
                    <div class="mb-4 mt-2 pt-4 d-flex box-title ">
                      <a href="#" class="avatar vipAvatar vip3">
                        <img src="https://media.truyenyy.vn/profile/2019-06/thumb_31691bbca8_40x40.jpg" alt="#">
                      </a>
                      <div class="ml-2">
                        <div class="d-flex">
                          <a href="#">
                            <strong>macdanh1712</strong>
                          </a>
                        </div>
                        <div class="text-left">Luyện Khí Tầng Sáu</div>
                        <div class="message text-left">Cố lên dịch nhé. Ra chương nhanh rồi tui lại thêm KP TLT cho. Cảm ơn nhiều.</div>
                      </div>
                    </div>
                    <div class="mb-4 mt-2 pt-4 d-flex box-title ">
                      <a href="#" class="avatar vipAvatar vip3">
                        <img src="https://media.truyenyy.vn/profile/2019-06/thumb_31691bbca8_40x40.jpg" alt="#">
                      </a>
                      <div class="ml-2">
                        <div class="d-flex">
                          <a href="#">
                            <strong>macdanh1712</strong>
                          </a>
                        </div>
                        <div class="text-left">Luyện Khí Tầng Sáu</div>
                        <div class="message text-left">Cố lên dịch nhé. Ra chương nhanh rồi tui lại thêm KP TLT cho. Cảm ơn nhiều.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid py-4 second-background">
        <div class="container">
            <div class="row m-0 p-0">
                <div class="col-12 m-0 p-0">
                    <ContactComponent></ContactComponent>
                </div>
            </div>
        </div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import NavigationComponent from "../components/NavigationComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import ContactComponent from "../components/ContactComponent.vue";

export default {
  name: "DocTruyen",
  components: {
    NavigationComponent,
    FooterComponent,
    ContactComponent,
  },
  data() {
    return {
      chap: [{
        title: '',
        link: '',
        content: '',
      }],
      truyen: [{
        name: '',
        storyId: '',
        link: ''
      }]
    }
  },
  mounted() {
  axios.get('/api/index/chap/?storyId=' + this.$route.params.name + '&chapId=' + this.$route.params.id).then((response) => {
    this.truyen = response.data['truyen'][0]
    this.chap = response.data['chap'][0]
    console.log('/api/index/chap/?storyId=' + this.$route.params.name + '&chapId=' + this.$route.params.id)
  })
}
};
</script>
<style>
.wiki-content {
    background: #faf5eb url(/images/church.png) 0 0 repeat;
    background-size: 100px;
    color: #262626;
    border: 6px solid #b0aca7;
    padding: 60px 64px;
    margin-left: auto;
    margin-right: auto;
}
.iconfont {
    font-family: iconfont!important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.box-title{
  border-top: 2px solid #cfcfcf;
}
</style>