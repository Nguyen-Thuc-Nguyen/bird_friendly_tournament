<template lang="">
  <main>
  <div>
        <img class="banner-details user-profile" v-bind:src="player.image" alt="" >
        <div class="container-fluid cnter-2">
            <nav aria-label="Breadcrumb">
                <ol class="breadcrumb  justify-content-center py-0 mb-4">
                    <li class="breadcrumb-item">
                        <RouterLink class="link-success" to="/competition">Thi đấu</RouterLink>
                    </li>
                    <li class="breadcrumb-item " aria-current="page">Chi tiết</li>
                </ol>
            </nav>
            <h1 class="bannerh1">Phòng số {{room.id}}</h1>
            <br>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="article-event clearfix">
                <div class="detail-event">
                    <div class="col-sm-4">
                        <h4 class="event-content-title">Thông tin phòng</h4>
                        <p class="event-content-info">
                            <span class="event-sub-content-title">Loại chim của đối thủ:</span>
                            <a href="#">chim sẻ
                            </a>
                            <span class="event-sub-content-title">Tên chim của đối thủ: </span>
                            {{player.name}}
                            <span class="event-sub-content-title">Điểm của chim đối thủ: </span>
                            {{player.elo}}
                        </p>
                    </div>
                    <div class="col-sm-4">
                        <h4 class="event-content-title">Thông tin thi đấu</h4>
                        <p class="event-content-info">

                            <span class="event-sub-content-title">Ngày thi đấu: 
                                <em class="date">{{room.date}}</em></span>
                            <span class="event-sub-content-title"> Điểm: </span>{{room.elo}}
                            
                            <span class="event-sub-content-title">Loại chim:  </span>{{room.birdType}}
                           
                            <span class="event-sub-content-title"> Địa điểm thi đấu:</span>{{room.place}} 
                            
                        </p>
                    </div>

                    <div class="col-sm-4">
                        <h4 class="event-content-title">Video xác nhận thi đấu</h4>
                        <p class="event-content-info">
                            <span class="event-sub-content-title">Video:</span>
                            <br>
                            <button type="button" class="btn btn-danger" data-bs-toggle="modal"
                                data-bs-target="#videoConfirm">
                                Xem video
                            </button>
                            <!-- Modal -->
                        <div class="modal fade" id="videoConfirm" tabindex="-1" aria-labelledby="videoConfirm"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="videoConfirm">Video xác nhận thi đấu</h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="ratio ratio-16x9">
                                            <iframe src="https://www.youtube.com/embed/vlDzYIIOYmM" title="YouTube video"
                                                allowfullscreen></iframe>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <a href="admin.html"><button type="button" class="btn btn-primary">Xác
                                                nhận</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </p>
                    </div>

                </div>
                <div class="row align-items-center justify-content-center" style="margin-top: 50px">
                    <div class="col-12 center">
                        <a href="#confirm" data-bs-toggle="modal">
                            <button class="btn btn-success">Tham gia</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="confirm" tabindex="-1" aria-labelledby="confirm" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="confirm">Xác nhận thi đấu</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h8>Bạn có chắc chắn muốn tham gia trận đấu không ?</h8>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Không</button>
                        <button type="button" class="btn btn-primary" @click.prevent="Join">Thách đấu</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </main>
    <!-- <main>
      <div class="container-fluid homebox-2">
        <div class="card-body">
          <h3 class="card-title"> </h3>
          <p class="card-text">
            Ngày thi đấu: {{room.date}}
          </p>
          <p class="card-text">
            Loại chim: {{room.birdType}}
          </p>
          <p class="card-text">
            Điểm: {{room.elo}}
          </p>
          <p class="card-text">
            Địa điểm thi đấu: {{room.place}}
          </p>
          <p class="card-text">
            Tên của chim đối thủ: {{player.name}}
          </p>
          <p class="card-text">
            Điểm của chim đối thủ: {{player.elo}}
          </p>
          <p class="card-text">
            Hình ảnh:
            <img class="img-fluid" v-bind:src="player.image" alt="">
          </p>
        </div>
        <div class="card-body">
          
        </div>
      </div>
    </main> -->
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      competition: {
        type: Object,
        default: null
      },
      id: "",
      room: "",
      player: "",
    }
  },
  mounted() {
    axios
      .get("https://aspnetcore-staging.azurewebsites.net/Competitions/" + this.$route.params.id)
      .then((response) => {
        console.log('competition room: ', response.data)
        this.competition = response.data
        this.room = response.data.competitionRecord
        this.player = this.room.participantRecords[0].bird
        console.log('room: ', this.room)
        console.log('player', this.player)
      });
  },
  methods: {
    Join() {
      axios.post("https://aspnetcore-staging.azurewebsites.net/Competitions/join", {
        competitionId: Number(this.$route.params.id),
        birdId: this.player.id
      }).then((response) => {
        this.$router.push('/competition-room');
      });
    }
  }
}
</script>
<style lang="">
    
</style>