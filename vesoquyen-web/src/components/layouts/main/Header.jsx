import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../images/logo/quyen.png'

const menuList = [
  {
    title: 'TRANG CHỦ',
    path: '/',
  },
  {
    title: 'MUA VÉ SỐ',
    path: '/mua-ve-so',
  },
  {
    title: 'KẾT QUẢ XỔ SỐ',
    path: '/ket-qua-xo-so',
  },
  {
    title: 'TIN TỨC',
    path: '/tin-tuc',
  },
]

export default function Header() {
  return (
    <header className="w-full">
      <div className="container">
        <div className="flex flex-row h-16 justify-between items-center my-2">
          <div className="h-full overflow-hidden">
            <img
              className="h-full object-cover"
              src={logo}
              alt=""
            />
          </div>
          <div>
            <Link
              className="text-white bg-red-600 py-2 px-4 rounded-md font-normal"
              to="/dang-nhap"
            >
              Đăng nhập
            </Link>
          </div>
        </div>
        <div className="w-full bg-red-600 rounded-lg overflow-hidden hidden sm:block">
          <div className="w-full flex flex-row justify-between">
            {menuList.map((menu, index) => (
              <Link
                key={index + Math.random}
                to={menu.path}
                className="basis-1/4 py-3 flex justify-center cursor-pointer hover:bg-red-900 text-white font-medium"
              >
                {menu.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
