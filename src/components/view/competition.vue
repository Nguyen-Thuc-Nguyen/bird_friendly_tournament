<template lang="">
    <main>
        <div class="container-fluid homebox-2">
          <div class="row">
            <div class="col-lg-8">
              <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                  <div class="card shadow" style="width: 90%;">
                    <a href="competition-room" class="post-thumb" target="_blank">
                      <img src="src/assets/images/signin.jpg" height=240 class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                      <h2 class="card-title">Phòng 1</h2>
                      <h7 class="card-subtitle">Nguyen123</h7>
                      <p class="card-text">
                        Loại chim: Chim sẻ
                      </p>
                      <p class="card-text">
                        Cấp bậc: Đồng
                      </p>
                      <p class="card-text">
                        Thể loại: Theo Bậc
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow" style="width: 90%;">
                    <a href="competition-room" class="post-thumb" target="_blank">
                      <img src="src/assets/images/signin.jpg" height=240 class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                      <h2 class="card-title">Phòng 1</h2>
                      <h7 class="card-subtitle">Nguyen123</h7>
                      <p class="card-text">
                        Loại chim: Chim sẻ
                      </p>
                      <p class="card-text">
                        Cấp bậc: Đồng
                      </p>
                      <p class="card-text">
                        Thể loại: Theo Bậc
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow" style="width: 90%;">
                    <a href="competition-room" class="post-thumb" target="_blank">
                      <img src="src/assets/images/signin.jpg" height=240 class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                      <h2 class="card-title">Phòng 1</h2>
                      <h7 class="card-subtitle">Nguyen123</h7>
                      <p class="card-text">
                        Loại chim: Chim sẻ
                      </p>
                      <p class="card-text">
                        Cấp bậc: Đồng
                      </p>
                      <p class="card-text">
                        Thể loại: Theo Bậc
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow" style="width: 90%;">
                    <a href="competition-room" class="post-thumb" target="_blank">
                      <img src="src/assets/images/signin.jpg" height=240 class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                      <h2 class="card-title">Phòng 1</h2>
                      <h7 class="card-subtitle">Nguyen123</h7>
                      <p class="card-text">
                        Loại chim: Chim sẻ
                      </p>
                      <p class="card-text">
                        Cấp bậc: Đồng
                      </p>
                      <p class="card-text">
                        Thể loại: Theo Bậc
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <button type="button" class="createbox" data-bs-toggle="modal" data-bs-target="#taoPhongDau">
                <i class="fa-regular fa-plus"></i> Tạo phòng đấu
              </button>
              <div class="container-fluid shadow searchbox">
                <h2>Tìm kiếm</h2>
                <div class="decor-search"></div>
                <br>
                <div class="input-group">
                  <div class="form-inline">
                    <input type="search" id="form1" class="form-control" placeholder="Tìm kiếm" />
                  </div>
                  <button type="button" class="btn btn-success">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="empty"></div>
          </div>
        </div>
      </main>
      <div id="taoPhongDau" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header btn-success">
                <h4 class="modal-title">Tạo phòng thi đấu</h4>
              </div>
              <div class="modal-body">
                <input type="hidden">
                <div class="form-group">
                  <label>Tên phòng đấu</label>
                  <input type="text" name="name" class="form-control" placeholder="Nhập tên phòng" required>
                </div>
                <br>
                <div class="form-group">
                  <label>Thời gian</label>
                  <input type="date" name="date" class="form-control" required>
                </div>
                <br>
                <div class="form-group">
                  <label>Loại chim</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Loại chim</option>
                    <option value="1">Chim sẻ</option>
                    <option value="2">Chim chào mào</option>
                    <option value="3">Chim sáo</option>
                  </select>
                </div>
                <br>
                <div class="form-group">
                  <label>Khu vực</label>
                  <input type="text" name="address" class="form-control" placeholder="Nhập khu vực" required>
                </div>
                <br>
                <div class="form-group">
                  <label>Bậc Xếp hạng</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Cấp bậc</option>
                    <option value="1">Đồng</option>
                    <option value="2">Bạc</option>
                    <option value="3">Vàng</option>
                  </select>
                </div>
              </div>
              <div class="modal-footer btn btn-light">
                <input type="button" class="btn " data-bs-dismiss="modal" value="Hủy">
                <router-link to="/your-room"  class="btn btn-success" value="Tạo">Tạo</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>