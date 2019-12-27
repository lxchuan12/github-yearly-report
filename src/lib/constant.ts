export const YEAR = 2019;
export const YEAR_START = new Date('2019-01-01');
export const YEAR_END = new Date('2020-01-01');
export const CLIENT_ID = 'd91686b028f8cc13205f';
export const CLIENT_SECRET = '3bcf7179c504ac7d74b726f36842815999c4722a';

export const GITHUB_TOKEN = 'YEARLY_REPORT_GITHUB_TOKEN';
export const GITHUB_CODE = 'YEARLY_REPORT_GITHUB_CODE';

export const HOME_STATUS = {
  INIT: 0, // 初始状态
  BEGIN: 1, // 开始生成数据
  FINISH: 2, // 结束生成数据
  ERROR: -1, // 出错
};

export const TIMEOUT = 3000;

export const REPOS_PICK_KEYS: string[] = [
  'name', // 项目名
  'description', // 项目描述
  'fork', // 是否是 fork 别人的
  'created_at', // 创建时间
  'updated_at', // 更新时间
  'stargazers_count', // star 数
  'language', // 主要语言
  'forks_count', // fork 数
  'open_issues', // 打开的 issue 数
];
