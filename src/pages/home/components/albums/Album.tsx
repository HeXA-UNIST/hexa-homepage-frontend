export default function buildAlbumItems() {
  return [
    <div className="album-item">
      <img
        src={`${process.env.PUBLIC_URL}/images/sample1.png`}
        className="profile"
        alt="face"
      />
      <div className="album-item__title">프로젝트</div>
      <div className="album-item__subtitle">
        HeXA는 매학기 초에 승인받은 프로젝트를 진행하며 UNIST 학우들을 위한
        서비스를 개발합니다.
      </div>
    </div>,
    <div className="album-item">
      <img
        src={`${process.env.PUBLIC_URL}/images/sample1.png`}
        className="profile"
        alt="face"
      />
      <div className="album-item__title">세미나</div>
      <div className="album-item__subtitle">
        HeXA에서 각종 스터디와 내외부 연사를 초청한 세미나가 이루어집니다.
      </div>
    </div>,
    <div className="album-item">
      <img
        src={`${process.env.PUBLIC_URL}/images/sample1.png`}
        className="profile"
        alt="face"
      />
      <div className="album-item__title">홈커밍데이</div>
      <div className="album-item__subtitle">
        HeXA의 졸업생과 재학생이 만나는 자리입니다. UNIST 컴퓨터공학과와
        후원사의 지원을 통해 이루어지며 각종 진로 조언을 얻을 수 있습니다.
      </div>
    </div>,
    <div className="album-item">
      <img
        src={`${process.env.PUBLIC_URL}/images/sample1.png`}
        className="profile"
        alt="face"
      />
      <div className="album-item__title">Coming Soon</div>
      <div className="album-item__subtitle">무엇이 추가되어야 할까요?</div>
    </div>
  ];
}
