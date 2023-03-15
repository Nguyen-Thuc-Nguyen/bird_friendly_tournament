
<template>
    <div class="banner-details user-profile"
        style="    background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(src/assets/images/homeimg.jpg);">
        <div class="container-fluid cnter-2">
            <nav aria-label="Breadcrumb">
                <ol class="breadcrumb  justify-content-center py-0 mb-4">
                    <li class="breadcrumb-item">
                        <RouterLink class="link-success" to="/competition">Thi đấu</RouterLink>
                    </li>
                    <li class="breadcrumb-item " aria-current="page">Chi tiết</li>
                </ol>
            </nav>
            <h1 class="bannerh1">Chi tiết trận đấu</h1>
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
                            <span class="event-sub-content-title">Người thách đấu:</span>
                            nguyen123
                            <span class="event-sub-content-title">Loại chim của người thách đấu:</span>
                            <a href="#">chim sẻ
                            </a>
                            <span class="event-sub-content-title">Người tham gia:</span>
                            thanh123
                            <span class="event-sub-content-title">Loại chim của tham gia:</span>
                            <a href="#">chim sẻ
                            </a>

                        </p>
                    </div>
                    <div class="col-sm-4">
                        <h4 class="event-content-title">Thông tin thi đấu</h4>
                        <p class="event-content-info">

                            <span class="event-sub-content-title">Ngày thi đấu:
                                <em class="date">12/04/2023</em></span>
                            <span class="event-sub-content-title">Điện thoại:</span>
                            <a href="#" title="Liên hệ qua SĐT">081984551
                            </a>

                            <span class="event-sub-content-title">Email:</span>
                            <a href="#" title="Liên hệ qua email">abc@gmail</a>
                            <span class="event-sub-content-title">Địa chỉ:</span>
                            <a href="#" target="_blank" title="">1 Nguyễn Đình Chiểu quận 3</a>
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
                    <div class="col-2">
                        <a href="#">
                            <button class="btn btn-success">Chỉnh sửa</button>
                        </a>
                    </div>
                    <div class="col-2">
                        <a href="#">
                            <button class="btn btn-success">Tham gia</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>