import { useState } from "react";
import ChatCard from "./ChatCard";
import { AnimatePresence } from "framer-motion";
// import NewChatCard from "./NewChatCard";

export default function ChatBot() {
  const [showchat, setShowchat] = useState(false);
  const handleShowChat = () => {
    setShowchat(!showchat);
  };
  return (
    <div className="relative">
      {!showchat && (
        <button
          onClick={() => setShowchat(!showchat)}
          className="z-20 text-white right-0 flex flex-col shrink-0 grow-0 justify-around fixed bottom-0 rounded-lg"
        >
          <svg
            width="90"
            height="90"
            viewBox="0 0 117 117"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_dd_714_92)">
              <rect
                x="18.1191"
                y="10.9836"
                width="80"
                height="80"
                rx="40"
                fill="url(#paint0_linear_714_92)"
              />
              <g clip-path="url(#clip0_714_92)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M58.8841 65.5316C61.1341 66.6516 63.7291 67.2931 66.4941 67.2931C66.9391 67.2931 67.3841 67.2756 67.8241 67.2276C69.1641 67.1366 70.5041 67.4961 71.6241 68.2506L76.1741 71.3131C76.4891 71.5256 76.8991 71.5406 77.2291 71.3521C77.3911 71.2597 77.5239 71.1237 77.6123 70.9595C77.7007 70.7953 77.7412 70.6096 77.7291 70.4236L77.3091 63.4231C80.3841 60.7976 82.1191 57.1701 82.1191 53.3786C82.1191 47.4561 77.9491 42.3651 72.0391 40.3656C68.7691 34.5221 61.9841 30.4836 54.1191 30.4836C43.0491 30.4836 34.1191 38.4856 34.1191 48.2616C34.1191 53.1486 36.3791 57.8201 40.3741 61.1796L39.8191 70.4236C39.7991 70.8036 39.9941 71.1631 40.3241 71.3521C40.6541 71.5406 41.0641 71.5256 41.3791 71.3131L47.0441 67.4996C48.687 66.3937 50.647 65.8566 52.6241 65.9706C53.1291 66.0226 53.6241 66.0391 54.1191 66.0391C55.7591 66.0391 57.3541 65.8631 58.8841 65.5316ZM73.2341 43.0246C73.82 44.7085 74.1191 46.4787 74.1191 48.2616C74.1191 55.5756 69.1191 61.8971 61.9641 64.6171C63.3841 65.0551 64.9091 65.2931 66.4941 65.2931C66.8691 65.2931 67.2441 65.2796 67.6141 65.2386C67.6291 65.2371 67.6391 65.2356 67.6541 65.2351C69.4541 65.1066 71.2441 65.5841 72.7391 66.5916L75.6141 68.5246L75.2841 63.0346C75.2641 62.7096 75.4041 62.3951 75.6591 62.1921C78.4891 59.9411 80.1191 56.7421 80.1191 53.3786C80.1191 48.9311 77.3291 45.0711 73.2341 43.0246ZM48.6341 49.9836L49.9841 53.6331L53.6341 54.9836L49.9841 56.3341L48.6341 59.9836L47.2841 56.3341L43.6341 54.9836L47.2841 53.6331L48.6341 49.9836ZM57.6191 36.9836L60.1841 43.9176L67.1191 46.4836L60.1841 49.0496L57.6191 55.9836L55.0541 49.0496L48.1191 46.4836L55.0541 43.9176L57.6191 36.9836ZM49.6191 39.4836V38.4836C49.6191 37.9316 49.1691 37.4836 48.6191 37.4836C48.0691 37.4836 47.6191 37.9316 47.6191 38.4836V39.4836H46.6191C46.0691 39.4836 45.6191 39.9316 45.6191 40.4836C45.6191 41.0356 46.0691 41.4836 46.6191 41.4836H47.6191V42.4836C47.6191 43.0356 48.0691 43.4836 48.6191 43.4836C49.1691 43.4836 49.6191 43.0356 49.6191 42.4836V41.4836H50.6191C51.1691 41.4836 51.6191 41.0356 51.6191 40.4836C51.6191 39.9316 51.1691 39.4836 50.6191 39.4836H49.6191Z"
                  fill="url(#paint1_linear_714_92)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M58.8841 65.5316C61.1341 66.6516 63.7291 67.2931 66.4941 67.2931C66.9391 67.2931 67.3841 67.2756 67.8241 67.2276C69.1641 67.1366 70.5041 67.4961 71.6241 68.2506L76.1741 71.3131C76.4891 71.5256 76.8991 71.5406 77.2291 71.3521C77.3911 71.2597 77.5239 71.1237 77.6123 70.9595C77.7007 70.7953 77.7412 70.6096 77.7291 70.4236L77.3091 63.4231C80.3841 60.7976 82.1191 57.1701 82.1191 53.3786C82.1191 47.4561 77.9491 42.3651 72.0391 40.3656C68.7691 34.5221 61.9841 30.4836 54.1191 30.4836C43.0491 30.4836 34.1191 38.4856 34.1191 48.2616C34.1191 53.1486 36.3791 57.8201 40.3741 61.1796L39.8191 70.4236C39.7991 70.8036 39.9941 71.1631 40.3241 71.3521C40.6541 71.5406 41.0641 71.5256 41.3791 71.3131L47.0441 67.4996C48.687 66.3937 50.647 65.8566 52.6241 65.9706C53.1291 66.0226 53.6241 66.0391 54.1191 66.0391C55.7591 66.0391 57.3541 65.8631 58.8841 65.5316ZM73.2341 43.0246C73.82 44.7085 74.1191 46.4787 74.1191 48.2616C74.1191 55.5756 69.1191 61.8971 61.9641 64.6171C63.3841 65.0551 64.9091 65.2931 66.4941 65.2931C66.8691 65.2931 67.2441 65.2796 67.6141 65.2386C67.6291 65.2371 67.6391 65.2356 67.6541 65.2351C69.4541 65.1066 71.2441 65.5841 72.7391 66.5916L75.6141 68.5246L75.2841 63.0346C75.2641 62.7096 75.4041 62.3951 75.6591 62.1921C78.4891 59.9411 80.1191 56.7421 80.1191 53.3786C80.1191 48.9311 77.3291 45.0711 73.2341 43.0246ZM48.6341 49.9836L49.9841 53.6331L53.6341 54.9836L49.9841 56.3341L48.6341 59.9836L47.2841 56.3341L43.6341 54.9836L47.2841 53.6331L48.6341 49.9836ZM57.6191 36.9836L60.1841 43.9176L67.1191 46.4836L60.1841 49.0496L57.6191 55.9836L55.0541 49.0496L48.1191 46.4836L55.0541 43.9176L57.6191 36.9836ZM49.6191 39.4836V38.4836C49.6191 37.9316 49.1691 37.4836 48.6191 37.4836C48.0691 37.4836 47.6191 37.9316 47.6191 38.4836V39.4836H46.6191C46.0691 39.4836 45.6191 39.9316 45.6191 40.4836C45.6191 41.0356 46.0691 41.4836 46.6191 41.4836H47.6191V42.4836C47.6191 43.0356 48.0691 43.4836 48.6191 43.4836C49.1691 43.4836 49.6191 43.0356 49.6191 42.4836V41.4836H50.6191C51.1691 41.4836 51.6191 41.0356 51.6191 40.4836C51.6191 39.9316 51.1691 39.4836 50.6191 39.4836H49.6191Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_dd_714_92"
                x="0.119141"
                y="0.983582"
                width="116"
                height="116"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_714_92"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="6"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect2_dropShadow_714_92"
                />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="6" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_714_92"
                  result="effect2_dropShadow_714_92"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_714_92"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_714_92"
                x1="58.1191"
                y1="10.9836"
                x2="58.1191"
                y2="90.9836"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3D6CF8" />
                <stop offset="1" stop-color="#08194A" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_714_92"
                x1="58.1191"
                y1="30.4836"
                x2="58.1191"
                y2="71.4836"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#B09FFF" />
                <stop offset="1" stop-color="#0B1F86" />
              </linearGradient>
              <clipPath id="clip0_714_92">
                <rect
                  width="48"
                  height="48"
                  fill="white"
                  transform="translate(34.1191 26.9836)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      )}
      {/* <NewChatCard /> */}
      <AnimatePresence initial={true} mode="wait">
        {showchat && <ChatCard handleShowChat={handleShowChat} />}
      </AnimatePresence>
    </div>
  );
}
