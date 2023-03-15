

<template>
    <link href="src/assets/css/admin.css" rel="stylesheet" type="text/css" />
    <header>
        <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
            <div class="position-sticky">
                <div class="list-group list-group-flush mx-3 mt-4">
                    <a href="#" class="list-group-item list-group-item-action py-2 ripple " aria-current="true">
                        <div class="user-icon"><i class="fa-solid fa-bars-progress"></i> </div><span>Đang thi đấu</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action py-2 ripple " aria-current="true">
                        <div class="user-icon"><i class="fa-solid fa-check-to-slot"></i> </div><span>Chờ xác nhận</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action py-2 ripple ">
                        <div class="user-icon"><i class="fa-solid fa-list"></i></div> <span>Đã xác nhận</span>
                    </a>

                </div>
            </div>
        </nav>
        <nav class="navbar navbar-expand-md fixed-top">
            <div class="container-fluid">
                <div class="row">
                    <div>
                        <h1>BFC</h1>
                    </div>
                    <div>
                        <h5>Bird Friendly Competition</h5>
                    </div>
                </div>

                <div class="d-flex">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <div class="dropdown show ">
                                <button class="btn user-dropdown nav-link btn-light dropdown-toggle" type="button"
                                    id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img class="img-headeruser" src="src/assets/images/user.jpg" alt="">
                                    nguyen123
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item" href="user_profile.html">
                                        <div class="user-icon"><i class="fa-solid fa-user"></i></div> Cá nhân
                                    </a>
                                    <a class="dropdown-item" href="#">
                                        <div class="user-icon"><i class="fa-solid fa-calendar-days"></i></div>Lịch thi
                                        đấu
                                    </a>
                                    <a class="dropdown-item" href="#">
                                        <div class="user-icon"><i class="fa-solid fa-ranking-star"></i>
                                        </div>Xếp hạng
                                    </a>
                                    <a class="dropdown-item" href="#">
                                        <div class="user-icon"> <i class="fa-solid fa-right-from-bracket"></i></div>
                                        logout
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </header>

    <div class="container mt-3">
        <div class="row">
            <div class="col-md-12">
                <div class="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
                    <table class="table manage-candidates-top mb-0">
                        <thead>
                            <tr>
                                <th>Thông tin trận đấu</th>
                                <th class="text-center">Trạng thái</th>
                                <th class="action text-right txtf">Xác nhận</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="candidates-list">
                                <td class="title">
                                    <div class="thumb">
                                        <img class="img-fluid" src="src/assets/images/thidauad.jpg" alt="">
                                    </div>
                                    <div class="candidate-list-details">
                                        <div class="candidate-list-info">
                                            <div class="candidate-list-title">
                                                <h6 class="mb-0"><router-link class="link-success"
                                                        to="/competition-room">Phòng đấu 1</router-link></h6>
                                            </div>
                                            <div class="candidate-list-option">
                                                <ul class="list-unstyled">
                                                    <li>
                                                        <div class="list-icon"><i class="fa-solid fa-circle-info"></i>
                                                        </div>Chim sẻ
                                                    </li>
                                                    <li>
                                                        <div class="list-icon"><i class="fa-regular fa-clock"></i>
                                                        </div>3 days ago
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="candidate-list-favourite-time text-center">
                                    <span class="candidate-list-time order-1">Chờ xác nhận</span>
                                </td>
                                <td>
                                    <ul class="list-unstyled mb-0 d-flex justify-content-end">
                                        <li><router-link to="/competition-room" class="text-primary" data-toggle="tooltip"
                                                title="" data-original-title="view"><i class="far fa-eye"></i></router-link>
                                        </li>
                                        <li><a href="#" class="text-info" data-toggle="tooltip" title=""
                                                data-original-title="Edit"><i class="fa-solid fa-check"></i></a>
                                        </li>
                                        <li><a href="#" class="text-danger" data-toggle="tooltip" title=""
                                                data-original-title="Delete"><i class="fa-solid fa-x"></i></a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="candidates-list">
                                <td class="title">
                                    <div class="thumb">
                                        <img class="img-fluid" src="src/assets/images/thidauad.jpg" alt="">
                                    </div>
                                    <div class="candidate-list-details">
                                        <div class="candidate-list-info">
                                            <div class="candidate-list-title">
                                                <h6 class="mb-0"><router-link class="link-success"
                                                        to="/competition-room">Phòng đấu 1</router-link></h6>
                                            </div>
                                            <div class="candidate-list-option">
                                                <ul class="list-unstyled">
                                                    <li>
                                                        <div class="list-icon"><i class="fa-solid fa-circle-info"></i>
                                                        </div>Chim sẻ
                                                    </li>
                                                    <li>
                                                        <div class="list-icon"><i class="fa-regular fa-clock"></i>
                                                        </div>3 days ago
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="candidate-list-favourite-time text-center">
                                    <span class="candidate-list-time order-1">Chờ xác nhận</span>
                                </td>
                                <td>
                                    <ul class="list-unstyled mb-0 d-flex justify-content-end">
                                        <li><router-link to="/competition-room" class="text-primary" data-toggle="tooltip"
                                                title="" data-original-title="view"><i class="far fa-eye"></i></router-link>
                                        </li>
                                        <li><a href="#" class="text-info" data-toggle="tooltip" title=""
                                                data-original-title="Edit"><i class="fa-solid fa-check"></i></a>
                                        </li>
                                        <li><a href="#" class="text-danger" data-toggle="tooltip" title=""
                                                data-original-title="Delete"><i class="fa-solid fa-x"></i></a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="candidates-list">
                                <td class="title">
                                    <div class="thumb">
                                        <img class="img-fluid" src="src/assets/images/thidauad.jpg" alt="">
                                    </div>
                                    <div class="candidate-list-details">
                                        <div class="candidate-list-info">
                                            <div class="candidate-list-title">
                                                <h6 class="mb-0"><router-link class="link-success"
                                                        to="/competition-room">Phòng đấu 1</router-link></h6>
                                            </div>
                                            <div class="candidate-list-option">
                                                <ul class="list-unstyled">
                                                    <li>
                                                        <div class="list-icon"><i class="fa-solid fa-circle-info"></i>
                                                        </div>Chim sẻ
                                                    </li>
                                                    <li>
                                                        <div class="list-icon"><i class="fa-regular fa-clock"></i>
                                                        </div>3 days ago
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="candidate-list-favourite-time text-center">
                                    <span class="candidate-list-time order-1">Chờ xác nhận</span>
                                </td>
                                <td>
                                    <ul class="list-unstyled mb-0 d-flex justify-content-end">
                                        <li><router-link to="/competition-room" class="text-primary" data-toggle="tooltip"
                                                title="" data-original-title="view"><i class="far fa-eye"></i></router-link>
                                        </li>
                                        <li><a href="#" class="text-info" data-toggle="tooltip" title=""
                                                data-original-title="Edit"><i class="fa-solid fa-check"></i></a>
                                        </li>
                                        <li><a href="#" class="text-danger" data-toggle="tooltip" title=""
                                                data-original-title="Delete"><i class="fa-solid fa-x"></i></a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="candidates-list">
                                <td class="title">
                                    <div class="thumb">
                                        <img class="img-fluid" src="src/assets/images/thidauad.jpg" alt="">
                                    </div>
                                    <div class="candidate-list-details">
                                        <div class="candidate-list-info">
                                            <div class="candidate-list-title">
                                                <h6 class="mb-0"><router-link class="link-success"
                                                        to="/competition-room">Phòng đấu 1</router-link></h6>
                                            </div>
                                            <div class="candidate-list-option">
                                                <ul class="list-unstyled">
                                                    <li>
                                                        <div class="list-icon"><i class="fa-solid fa-circle-info"></i>
                                                        </div>Chim sẻ
                                                    </li>
                                                    <li>
                                                        <div class="list-icon"><i class="fa-regular fa-clock"></i>
                                                        </div>3 days ago
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="candidate-list-favourite-time text-center">
                                    <span class="candidate-list-time order-1">Chờ xác nhận</span>
                                </td>
                                <td>
                                    <ul class="list-unstyled mb-0 d-flex justify-content-end">
                                        <li><router-link to="/competition-room" class="text-primary" data-toggle="tooltip"
                                                title="" data-original-title="view"><i class="far fa-eye"></i></router-link>
                                        </li>
                                        <li><a href="#" class="text-info" data-toggle="tooltip" title=""
                                                data-original-title="Edit"><i class="fa-solid fa-check"></i></a>
                                        </li>
                                        <li><a href="#" class="text-danger" data-toggle="tooltip" title=""
                                                data-original-title="Delete"><i class="fa-solid fa-x"></i></a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="candidates-list">
                                <td class="title">
                                    <div class="thumb">
                                        <img class="img-fluid" src="src/assets/images/thidauad.jpg" alt="">
                                    </div>
                                    <div class="candidate-list-details">
                                        <div class="candidate-list-info">
                                            <div class="candidate-list-title">
                                                <h6 class="mb-0"><router-link class="link-success"
                                                        to="/competition-room">Phòng đấu 1</router-link></h6>
                                            </div>
                                            <div class="candidate-list-option">
                                                <ul class="list-unstyled">
                                                    <li>
                                                        <div class="list-icon"><i class="fa-solid fa-circle-info"></i>
                                                        </div>Chim sẻ
                                                    </li>
                                                    <li>
                                                        <div class="list-icon"><i class="fa-regular fa-clock"></i>
                                                        </div>3 days ago
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="candidate-list-favourite-time text-center">
                                    <span class="candidate-list-time order-1">Chờ xác nhận</span>
                                </td>
                                <td>
                                    <ul class="list-unstyled mb-0 d-flex justify-content-end">
                                        <li><router-link to="/competition-room" class="text-primary" data-toggle="tooltip"
                                                title="" data-original-title="view"><i class="far fa-eye"></i></router-link>
                                        </li>
                                        <li><a href="#" class="text-info" data-toggle="tooltip" title=""
                                                data-original-title="Edit"><i class="fa-solid fa-check"></i></a>
                                        </li>
                                        <li><a href="#" class="text-danger" data-toggle="tooltip" title=""
                                                data-original-title="Delete"><i class="fa-solid fa-x"></i></a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="text-center mt-3 mt-sm-3">
                        <ul class="pagination justify-content-center mb-0">
                            <li class="page-item disabled"> <span class="page-link">Prev</span> </li>
                            <li class="page-item active" aria-current="page"><span class="page-link">1 </span>
                                <span class="sr-only">(current)</span>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">...</a></li>
                            <li class="page-item"><a class="page-link" href="#">25</a></li>
                            <li class="page-item"> <a class="page-link" href="#">Next</a> </li>
                        </ul>
                    </div>
                </div>
        </div>
    </div>
</div></template>