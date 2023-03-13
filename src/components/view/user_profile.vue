<template>
  <main>
    <div class="banner user-profile">
      <div class="container-fluid cnter-2">
        <nav aria-label="Breadcrumb">
          <ol class="breadcrumb  justify-content-center py-0 mb-4">
            <li class="breadcrumb-item"><a class=" link-success" href="trangchu.html">Home</a></li>
            <li class="breadcrumb-item " aria-current="page">Cá nhân</li>
          </ol>
        </nav>
        <h1 class="bannerh1">Thông tin cá nhân</h1>
        <br>
      </div>
    </div>
    <div class="container  mt-2">

      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button"
          role="tab" aria-controls="nav-home" aria-selected="true">Thông tin cá nhân</button>
        <button class="nav-link " id="nav-security-tab" data-bs-toggle="tab" data-bs-target="#nav-security" type="button"
          role="tab" aria-controls="nav-security" aria-selected="true">Bảo mật</button>
      </div>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
          <div class="container-xl px-4 mt-4">
            <div class="row">
              <div class="col-xl-4">
                <div class="card mb-4 mb-xl-0">
                  <div class="card-header">Hình ảnh đại diện</div>
                  <div class="card-body text-center">
                    <img class="img-account-profile rounded-circle mb-2" src="assets/images/user.jpg" alt="">
                    <div class="small font-italic text-muted mb-4">JPG hoặc PNG không được lớn hơn 5
                      MB
                    </div>
                    <button class="btn btn-primary" type="button">Sửa hình ảnh</button>
                  </div>
                </div>
              </div>
              <div class="col-xl-8">
                <div class="card mb-4">
                  <div class="card-header">Thông tin tài khoản</div>
                  <div class="card-body">
                    <form>
                      <div class="mb-3">
                        <label class="small mb-1" for="inputUsername">Tài khoản</label>
                        <input class="form-control" id="inputUsername" type="text" placeholder="Nhập tên tài khoản">
                      </div>
                      <div class="row gx-3 mb-3">
                        <div class="col-md-6">
                          <label class="small mb-1" for="inputFirstName">Họ</label>
                          <input class="form-control" id="inputFirstName" type="text" placeholder="Nhập họ">
                        </div>
                        <div class="col-md-6">
                          <label class="small mb-1" for="inputLastName">Tên</label>
                          <input class="form-control" id="inputLastName" type="text" placeholder="Nhập tên">
                        </div>
                      </div>
                      <div class="row gx-3 mb-3">
                        <div class="col-md-6">
                          <label class="small mb-1" for="inputBird">Loại chim</label>
                          <select class="form-select" aria-label="Default select example">
                            <option selected>Loại chim</option>
                            <option value="1">Chim sẻ</option>
                            <option value="2">Chim chào mào</option>
                            <option value="3">Chim én</option>
                          </select>
                        </div>
                        <div class="col-md-6">
                          <label class="small mb-1" for="inputPhone">Số điện thoại</label>
                          <input class="form-control" id="inputPhone" type="tel" placeholder="Nhập số điện thoại">
                        </div>

                      </div>
                      <div class="mb-3">
                        <label class="small mb-1" for="inputEmailAddress">Email </label>
                        <input class="form-control" id="inputEmailAddress" type="email" placeholder="Nhập email">
                      </div>
                      <div class="mb-3">
                        <label class="small mb-1" for="inputLocation">Địa điểm</label>
                        <input class="form-control" id="inputLocation" type="text" placeholder="Nhập địa điểm">
                      </div>
                      <button class="btn btn-primary" type="button">Lưu thông tin</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-security" role="tabpanel" aria-labelledby="nav-security-tab" tabindex="1">
          <div class="card mb-4 mt-lg-5">
            <h4 class="card-header">Thay đổi mật khẩu</h4>
            <div class="card-body">
              <form id="formChangePassword" method="POST" onsubmit="return false"
                class="fv-plugins-bootstrap5 fv-plugins-framework">
                <div class="alert alert-warning" role="alert">
                  <h6 class="alert-heading fw-bold mb-1">Đảm bảo tuân thủ theo qui tắc sau:
                  </h6>
                  <span>- Tối thiểu 8 chữ cái in hoa &amp; ký tự đặc biệt</span>
                </div>
                <div class="row">
                  <div class="mb-3 col-12 col-sm-6 form-password-toggle fv-plugins-icon-container">
                    <label class="form-label" for="newPassword">Mật khẩu mới</label>
                    <div class="input-group input-group-merge has-validation">
                      <input class="form-control" type="password" id="newPassword" name="newPassword"
                        placeholder="············">
                      <span class="input-group-text cursor-pointer"><i class="fa-regular fa-eye-slash"></i></span>
                    </div>
                    <div class="fv-plugins-message-container invalid-feedback"></div>
                  </div>

                  <div class="mb-3 col-12 col-sm-6 form-password-toggle fv-plugins-icon-container">
                    <label class="form-label" for="confirmPassword">Xác nhận mật khẩu</label>
                    <div class="input-group input-group-merge has-validation">
                      <input class="form-control" type="password" name="confirmPassword" id="confirmPassword"
                        placeholder="············">
                      <span class="input-group-text cursor-pointer"><i class="fa-regular fa-eye-slash"></i></span>
                    </div>
                    <div class="fv-plugins-message-container invalid-feedback"></div>
                  </div>
                  <div>
                    <button type="submit" class="btn btn-primary me-2">Thay đổi mật khẩu</button>
                  </div>
                </div>
                <input type="hidden">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
