const TIME_FRIEND_WITH = [
    { icon: '✈️', title: '여행' },
    { icon: '🚶', title: '산책' },
    { icon: '💬', title: '대화' },
    { icon: '📷', title: '사진' },
    { icon: '🎨', title: '취미' },
    { icon: '🤝', title: '봉사' },
    { icon: '🍽️', title: '식사' },
    { icon: '💪', title: '운동' },
    { icon: '🎭', title: '공연' },
    { icon: '🎬', title: '영화' },
    { icon: '🎮', title: '게임' },
    { icon: '🎤', title: '무대' },
];


// MARK: 통합 export
export const TIME_FRIEND = {
    friend: TIME_FRIEND_WITH,
};

// MARK: 개별 export (하위 호환성)
export { TIME_FRIEND_WITH, };