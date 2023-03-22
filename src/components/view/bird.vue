<template lang="">
     <!-- <hr class="hr">
            <table class="table manage-candidates-top mb-0">

              <thead>
                <tr>
                  <th>Hình ảnh</th>
                  <th class="text-center">Loại chim</th>
                  <th class="action text-right txtf">Thông tin</th>
                </tr>
              </thead>
              <br>
              <tbody>
                <tr class="candidates-list">
                  <td class="title">
                    <div class="thumb small-img">
                      <img class="img-fluid" src="src/assets/images/thidauad.jpg" alt="">
                    </div>
                  </td>
                  <td class="candidate-list-favourite-time text-center">
                    <div class="candidate-list-details">
                      <div class="candidate-list-info">
                        <div class="candidate-list-title">
                          Chim sẻ
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <ul class="list-unstyled mb-0 d-flex justify-content-end">
                      <li>
                        <button class="nav-link " id="nav-bird-tab" data-bs-toggle="tab" data-bs-target="#nav-bird"
                          type="button" aria-controls="nav-bird" aria-selected="true"><i class="far fa-eye"></i></button>
                      </li>
                    </ul>
                  </td>
                </tr> -->

    <tr class="candidates-list">
        <td class="title">
            <div class="small-img">
                <img class="img-fluid" v-bind:src="bird.image" height=150 alt="">
            </div>
        </td>
        <td class="candidate-list-favourite-time text-center">
            <div class="candidate-list-details">
                <div class="candidate-list-info">
                    <div class="candidate-list-title">
                        <p> Tên: {{ bird.name }} </p>
                        <p> Loại chim: {{bird.birdType}} </p>
                        <p> Bậc: {{ bird.rankName}} </p>
                        <p> Điểm: {{ bird.elo }} </p>                     
                    </div>
                </div>
            </div>
        </td>
        <td>
            <ul class="list-unstyled mb-0 d-flex justify-content-end">
                <li>
                    <div class="icon1">
                        <a href="#updateBird" class="text-info" data-bs-toggle="modal"><i
                                class="fa-sharp fa-solid fa-pen"></i></a>
                    </div>
                </li>

                <li>
                    <div class="icon1">
                        <a href="#" class="text-danger" data-toggle="tooltip" title=""
                            data-original-title="Delete"><i class="fa-solid fa-x"></i></a>
                    </div>
                </li>
            </ul>
        </td>
    </tr>

</template>
<script>
export default {
    props: {
        bird: {
            type: Object,
            default: null,
        },
    },
}
</script>
<style lang="">
    
</style>