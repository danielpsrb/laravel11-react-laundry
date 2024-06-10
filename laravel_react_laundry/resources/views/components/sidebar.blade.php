<div class="main-sidebar sidebar-style-2">
    <aside id="sidebar-wrapper">
        <div class="sidebar-brand">
            <a href="index.html">Admin Laundry</a>
        </div>
        <div class="sidebar-brand sidebar-brand-sm">
            <a href="index.html">Admin</a>
        </div>
        <ul class="sidebar-menu">
            <li class="nav-item ">
                <a href="/home" class="nav-link"><i class="fas fa-gauge"></i><span>Dashboard</span></a>
            </li>
            <li class="menu-header">Pages</li>
            <li class="nav-item ">
                <a href="{{ route('users.index') }}" class="nav-link "><i class="fas fa-user"></i>
                    <span>Users</span></a>
            </li>
            <li class="nav-item dropdown">
                <a href="#"
                    class="nav-link has-dropdown"><i class="fas fa-shopping-cart"></i> <span>Orders</span></a>
                <ul class="dropdown-menu">
                    <li class="{{ Request::is('features-activities') ? 'active' : '' }}">
                        <a class="nav-link"
                            href="#">Manage Orders</a>
                    </li>
                </ul>
            </li>
        </ul>

    </aside>
</div>
