const base64CardImages = [
    `data:image/svg+xml,%3csvg width='44' height='44' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_10690_282110)'%3e %3crect y='7.99994' width='44' height='28' rx='2' fill='white'/%3e %3crect x='0.5' y='8.49994' width='43' height='27' rx='1.5' stroke='black' stroke-opacity='0.08'/%3e %3crect x='18.75' y='17.3154' width='6.00001' height='9.375' fill='%23FF5F00'/%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M21.75 17.316C20.3783 18.4156 19.5 20.1052 19.5 22C19.5 23.8948 20.3783 25.5844 21.75 26.684C20.7228 27.5075 19.4189 28 18 28C14.6863 28 12 25.3137 12 22C12 18.6863 14.6863 16 18 16C19.4189 16 20.7228 16.4925 21.75 17.316Z' fill='%23EB001B'/%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M21.75 17.316C23.1217 18.4156 24 20.1052 24 22C24 23.8948 23.1217 25.5844 21.75 26.684C22.7772 27.5075 24.0811 28 25.5 28C28.8137 28 31.5 25.3137 31.5 22C31.5 18.6863 28.8137 16 25.5 16C24.0811 16 22.7772 16.4925 21.75 17.316Z' fill='%23F79E1B'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_10690_282110'%3e %3crect width='44' height='44' fill='white'/%3e %3c/clipPath%3e %3c/defs%3e %3c/svg%3e`,
    `data:image/svg+xml,%3csvg width='44' height='44' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3crect y='8' width='44' height='28' rx='2' fill='white'/%3e %3crect x='0.5' y='8.5' width='43' height='27' rx='1.5' stroke='black' stroke-opacity='0.08'/%3e %3cpath d='M26.0425 14.3374C26.0425 14.325 26.0425 14.3123 26.0429 14.2999H28.4347C28.6256 14.2999 28.7805 14.449 28.7805 14.6334L28.7843 16.9566C28.7746 16.9569 28.7649 16.9569 28.7552 16.9569C27.2596 16.9569 26.0425 15.7816 26.0425 14.3374Z' fill='%23F4821F'/%3e %3cpath d='M28.7891 20.3472H24.1545L24.1455 14.6342C24.1455 14.4497 24.3003 14.2999 24.4913 14.2999H25.1086C25.1082 14.3123 25.1082 14.325 25.1082 14.3374C25.1082 16.279 26.7438 17.8584 28.7544 17.8584C28.7645 17.8584 28.7747 17.8584 28.7848 17.858L28.7891 20.3472Z' fill='%23203E7A'/%3e %3cpath d='M28.7942 23.1361C28.7996 26.7559 25.7652 29.6947 22.0167 29.6999C18.2682 29.7052 15.2249 26.775 15.2194 23.1553L15.2058 14.6342C15.2058 14.4498 15.3606 14.2999 15.5516 14.2999H19.5001C19.6911 14.2999 19.8459 14.449 19.8459 14.6335L19.8595 23.5226C19.8614 24.6694 20.8253 25.5975 22.0128 25.596C23.2004 25.5941 24.1615 24.6634 24.16 23.5166L24.1565 21.2487H28.7911L28.7942 23.1361Z' fill='%23203E7A'/%3e %3c/svg%3e`,
    `data:image/svg+xml,%3csvg width='44' height='44' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3crect y='7.99994' width='44' height='28' rx='2' fill='white'/%3e %3cg clip-path='url(%23clip0_10690_282108)'%3e %3cpath d='M30.4627 18.5531C30.4506 18.1995 30.1477 17.9199 29.7798 17.9199H29.0007C28.7434 17.9199 28.5054 18.0608 28.39 18.2827L26.6298 21.7075L24.8216 18.2688C24.7038 18.0539 24.4706 17.9199 24.2181 17.9199H23.4342C23.0639 17.9199 22.7609 18.2018 22.7513 18.5577L22.5686 24.7534C22.559 25.1232 22.8667 25.4282 23.2515 25.4282H23.2755C23.6458 25.4282 23.9488 25.144 23.9584 24.7858L24.0426 21.3309C24.0522 20.9588 24.0642 20.2886 24.0522 20.0968H24.0738C24.2061 20.4365 24.5066 20.9911 24.6942 21.3517L25.8051 23.3021C26.0768 23.7782 26.7861 23.7828 27.0627 23.3091L28.2144 21.1714C28.402 20.8201 28.7001 20.2147 28.8348 19.9165H28.8564C28.8564 20.2678 28.8781 20.8941 28.8901 21.3424L28.9935 24.7881C29.0031 25.144 29.3061 25.4259 29.6764 25.4259H30.0082C30.3953 25.4259 30.7055 25.1185 30.6911 24.7465L30.4627 18.5531Z' fill='%23101010'/%3e %3cpath d='M35.5143 25.6315C32.9799 25.6315 31.6069 23.7689 31.6069 21.451C31.6069 19.1747 33.3214 17.7164 35.6249 17.7164C37.9717 17.7164 39.5996 19.0036 39.5996 21.3447C39.5996 23.718 38.0487 25.6315 35.5143 25.6315ZM35.6033 18.7725C33.9754 18.7725 33.444 20.1984 33.444 21.5157C33.444 22.8237 33.9417 24.58 35.6249 24.58C37.2528 24.58 37.7601 22.7497 37.7601 21.5064C37.7601 20.2285 37.1855 18.7725 35.6033 18.7725Z' fill='%23101010'/%3e %3cpath d='M20.4933 17.9107H20.0701C19.6974 17.9107 19.3944 18.2019 19.3944 18.5624V22.4356C19.3944 23.5634 18.8414 24.1804 17.7882 24.2335C16.7326 24.1804 16.1819 23.5657 16.1819 22.4356V18.5624C16.1819 18.2042 15.879 17.9107 15.5039 17.9107H15.0807C14.708 17.9107 14.4026 18.2019 14.4026 18.5624V22.4356C14.4026 22.8423 14.4507 23.2514 14.5709 23.6419C14.6743 23.9747 14.833 24.2936 15.0542 24.5709C15.2634 24.8298 15.5231 25.0447 15.8189 25.2041C16.1314 25.3728 16.4753 25.5023 16.8288 25.5508C17.3505 25.6224 17.6271 25.6109 17.9276 25.6109C18.5023 25.6086 18.8895 25.567 19.4353 25.3636C19.4689 25.352 19.5002 25.3382 19.5315 25.3243C19.8441 25.1926 20.1302 25.0054 20.3658 24.7651C20.6087 24.5155 20.7914 24.2174 20.9189 23.8984C21.0656 23.5264 21.1377 23.1312 21.1617 22.736C21.1665 22.6367 21.1714 22.535 21.1714 22.4356V18.5624C21.169 18.2019 20.866 17.9107 20.4933 17.9107Z' fill='%23101010'/%3e %3cpath d='M5.14022 20.804C4.79156 22.3108 5.54659 24.8667 7.02297 25.7426C7.04942 25.7587 7.09992 25.7842 7.06385 25.8396C6.12849 25.6617 5.22678 24.4692 4.78675 22.8123C4.69538 22.8307 4.66172 22.8885 4.62565 22.944C4.29863 23.457 4.34913 23.9885 4.60401 24.49C5.15705 25.5739 6.03952 26.1424 7.17446 26.2602C7.47743 26.2926 7.78762 26.2972 8.08097 26.1701C8.16994 26.1308 8.28055 26.0869 8.29016 25.9829C8.30459 25.8327 8.15311 25.8697 8.07856 25.8443C7.36923 25.6016 6.85466 25.1117 6.49878 24.4207C6.05154 23.5541 5.71971 22.3431 5.72693 21.3656C5.73414 20.4435 5.79425 19.9466 6.0852 19.4706C5.63075 19.7779 5.26766 20.2517 5.14022 20.804Z' fill='url(%23paint0_linear_10690_282108)'/%3e %3cpath d='M10.8245 18.3822C11.1876 18.3683 11.1828 18.6988 11.113 20.5568V20.8133C10.1897 20.8133 8.59788 20.8087 7.73224 20.8064V20.8041C7.73224 19.228 8.00877 18.5208 8.13861 18.0864C7.71301 18.1488 7.0734 18.3383 6.71993 19.0477C6.2799 19.9328 6.18372 21.2686 6.35445 22.3386C6.51314 23.3415 7.05897 25.1372 8.35021 25.5485C8.43918 25.5762 8.51612 25.4861 8.47044 25.4099C8.23239 25.0239 7.78034 24.021 7.72503 21.9549C8.45601 21.9688 10.4253 21.9965 11.113 21.9919V22.1676V24.8321C11.113 25.1325 11.3655 25.3752 11.6781 25.3752H12.3345C12.6471 25.3752 12.8996 25.1302 12.8996 24.8321V19.3875C12.9429 18.4122 12.2985 17.9038 11.6877 17.9038C11.3487 17.9038 11.0192 18.061 10.8245 18.3822Z' fill='url(%23paint1_linear_10690_282108)'/%3e %3c/g%3e %3crect x='0.5' y='8.49994' width='43' height='27' rx='1.5' stroke='black' stroke-opacity='0.08'/%3e %3cdefs%3e %3clinearGradient id='paint0_linear_10690_282108' x1='1.92942' y1='18.7041' x2='8.44486' y2='25.7283' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%23A58C30'/%3e %3cstop offset='0.2783' stop-color='%23A58C30'/%3e %3cstop offset='0.5912' stop-color='%23FFECA6'/%3e %3cstop offset='0.8284' stop-color='%23BFA64B'/%3e %3cstop offset='1' stop-color='%23BFA64B'/%3e %3c/linearGradient%3e %3clinearGradient id='paint1_linear_10690_282108' x1='4.59327' y1='16.2332' x2='11.1087' y2='23.2574' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%23A58C30'/%3e %3cstop offset='0.2783' stop-color='%23A58C30'/%3e %3cstop offset='0.5912' stop-color='%23FFECA6'/%3e %3cstop offset='0.8284' stop-color='%23BFA64B'/%3e %3cstop offset='1' stop-color='%23BFA64B'/%3e %3c/linearGradient%3e %3cclipPath id='clip0_10690_282108'%3e %3crect width='35.2' height='8.56216' fill='white' transform='translate(4.3999 17.7189)'/%3e %3c/clipPath%3e %3c/defs%3e %3c/svg%3e`,
    `data:image/svg+xml,%3csvg width='44' height='44' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3crect y='8' width='44' height='28' rx='2' fill='white'/%3e %3crect x='0.5' y='8.5' width='43' height='27' rx='1.5' stroke='black' stroke-opacity='0.08'/%3e %3cpath d='M21.2291 17.2248L19.1809 26.7997H16.7036L18.7518 17.2248H21.2291ZM31.6501 23.4074L32.9545 19.8117L33.7038 23.4074H31.6501ZM34.4153 26.7997H36.7056L34.7046 17.2248H32.5914C32.1148 17.2248 31.7143 17.5014 31.5366 17.9267L27.8196 26.7997H30.4209L30.9369 25.3694H34.1151L34.4153 26.7997ZM27.9487 23.6736C27.9591 21.147 24.4552 21.0068 24.4781 19.8778C24.4865 19.5347 24.8134 19.1693 25.529 19.0759C25.8835 19.0301 26.8628 18.9935 27.972 19.5046L28.406 17.473C27.81 17.2575 27.0431 17.05 26.089 17.05C23.6402 17.05 21.9175 18.3507 21.9038 20.2147C21.8877 21.5935 23.1342 22.3619 24.0716 22.8211C25.0372 23.2901 25.3609 23.5916 25.3564 24.0106C25.3496 24.653 24.5854 24.9374 23.8749 24.948C22.629 24.9678 21.9067 24.6113 21.3307 24.343L20.8811 26.4419C21.4606 26.7075 22.5288 26.9383 23.6351 26.95C26.2384 26.95 27.9411 25.6642 27.9487 23.6736ZM17.6892 17.2248L13.6758 26.7997H11.0572L9.08202 19.1581C8.96242 18.6885 8.85829 18.5157 8.49383 18.3172C7.8982 17.9937 6.91462 17.6911 6.05005 17.5028L6.10838 17.2248H10.324C10.8605 17.2248 11.3436 17.582 11.4663 18.2006L12.51 23.7417L15.0865 17.2248H17.6892Z' fill='%231434CB'/%3e %3c/svg%3e`
]

export {
    base64CardImages
}