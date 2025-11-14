const TIME_SEASONS_SEASON = [
    { icon: '🌸', title: '봄' },
    { icon: '🌊', title: '여름' },
    { icon: '🍂', title: '가을' },
    { icon: '❄️', title: '겨울' },
];

const TIME_SEASON_TASTE = [
    { icon: '🌿', title: '쑥떡' },
    { icon: '🥟', title: '찐빵' },
    { icon: '🍠', title: '고구마' },
    { icon: '🍷', title: '샹그리아' },
    { icon: '🍓', title: '딸기' },
    { icon: '🌽', title: '옥수수' },
    { icon: '🍉', title: '수박' },
    { icon: '🐟', title: '전어구이' },
    { icon: '🍡', title: '송편' },
    { icon: '🍜', title: '냉면' },
    { icon: '🌱', title: '봄나물' },
    { icon: '🍨', title: '빙수' },
    { icon: '🍎', title: '사과' },
    { icon: '☕', title: '핫초코' },
    { icon: '🍊', title: '귤' },

];


// MARK: 통합 export
export const TIME_SEASON = {
    season: TIME_SEASONS_SEASON,
    taste: TIME_SEASON_TASTE,
};

// MARK: 개별 export (하위 호환성)
export { TIME_SEASONS_SEASON, TIME_SEASON_TASTE };