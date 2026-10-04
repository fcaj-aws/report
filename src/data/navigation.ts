import type { LocalizedText } from '../contexts/LanguageContext';

export type NavigationIcon =
  | 'home'
  | 'book'
  | 'file'
  | 'blog'
  | 'calendar'
  | 'workshop'
  | 'evaluation'
  | 'feedback';

export interface NavigationItem {
  id: string;
  path: string;
  label: LocalizedText;
  summary?: LocalizedText;
  icon?: NavigationIcon;
  contentKey?: string;
  children?: NavigationItem[];
}

const worklogWeeks: NavigationItem[] = Array.from({ length: 12 }, (_, index) => {
  const week = index + 1;
  return {
    id: `week-${week}`,
    path: `/worklog/week-${week}`,
    label: { en: `1.${week} Week ${week}`, vi: `1.${week} Tuần ${week}` },
    summary: {
      en: week === 1 ? 'Getting familiar with AWS and its core services.' : 'Weekly activities, outcomes, and reflections.',
      vi: week === 1 ? 'Làm quen với AWS và các dịch vụ cốt lõi.' : 'Hoạt động, kết quả và ghi chú theo tuần.',
    },
    contentKey: `1-Worklog/1.${week}-Week${week}/_index`,
  };
});

export const navigation: NavigationItem[] = [
  {
    id: 'home',
    path: '/',
    label: { en: 'Internship Report', vi: 'Báo Cáo Thực Tập' },
    icon: 'home',
  },
  {
    id: 'worklog',
    path: '/worklog',
    label: { en: '1. Worklog', vi: '1. Nhật Ký' },
    summary: { en: 'A twelve-week learning journey.', vi: 'Hành trình học tập trong mười hai tuần.' },
    icon: 'book',
    contentKey: '1-Worklog/_index',
    children: worklogWeeks,
  },
  {
    id: 'proposal',
    path: '/proposal',
    label: { en: '2. Proposal', vi: '2. Đề Xuất' },
    summary: { en: 'Project scope, architecture, and expected outcomes.', vi: 'Phạm vi, kiến trúc và kết quả mong đợi.' },
    icon: 'file',
    contentKey: '2-Proposal/_index',
  },
  {
    id: 'blogs',
    path: '/blogs',
    label: { en: '3. Blogs Posted', vi: '3. Bài Viết Đã Đăng' },
    summary: { en: 'Technical writing and knowledge sharing.', vi: 'Bài viết kỹ thuật và chia sẻ kiến thức.' },
    icon: 'blog',
    contentKey: '3-BlogsPosted/_index',
    children: [1, 2, 3].map((blog) => ({
      id: `blog-${blog}`,
      path: `/blogs/blog-${blog}`,
      label: { en: `3.${blog} Blog ${blog}`, vi: `3.${blog} Bài Viết ${blog}` },
      contentKey: `3-BlogsPosted/3.${blog}-Blog${blog}/_index`,
    })),
  },
  {
    id: 'events',
    path: '/events',
    label: { en: '4. Events Participated', vi: '4. Sự Kiện Tham Gia' },
    summary: { en: 'Community events and key takeaways.', vi: 'Sự kiện cộng đồng và các bài học chính.' },
    icon: 'calendar',
    contentKey: '4-EventParticipated/_index',
    children: [1, 2].map((event) => ({
      id: `event-${event}`,
      path: `/events/event-${event}`,
      label: { en: `4.${event} Event ${event}`, vi: `4.${event} Sự Kiện ${event}` },
      contentKey: `4-EventParticipated/4.${event}-Event${event}/_index`,
    })),
  },
  {
    id: 'workshop',
    path: '/workshop',
    label: { en: '5. Workshop', vi: '5. Workshop' },
    summary: { en: 'A practical AWS networking workshop.', vi: 'Workshop thực hành về mạng trên AWS.' },
    icon: 'workshop',
    contentKey: '5-Workshop/_index',
    children: [
      {
        id: 'workshop-overview',
        path: '/workshop/overview',
        label: { en: '5.1 Workshop Overview', vi: '5.1 Tổng Quan Workshop' },
        contentKey: '5-Workshop/5.1-Workshop-overview/_index',
      },
      {
        id: 'workshop-prerequisite',
        path: '/workshop/prerequisite',
        label: { en: '5.2 Prerequisite', vi: '5.2 Chuẩn Bị' },
        contentKey: '5-Workshop/5.2-Prerequiste/_index',
      },
      {
        id: 'workshop-s3-vpc',
        path: '/workshop/s3-from-vpc',
        label: { en: '5.3 Access S3 from VPC', vi: '5.3 Truy Cập S3 từ VPC' },
        contentKey: '5-Workshop/5.3-S3-vpc/_index',
        children: [
          {
            id: 'create-gateway-endpoint',
            path: '/workshop/s3-from-vpc/create-gateway-endpoint',
            label: { en: '5.3.1 Create Gateway Endpoint', vi: '5.3.1 Tạo Gateway Endpoint' },
            contentKey: '5-Workshop/5.3-S3-vpc/5.3.1-create-gwe/_index',
          },
          {
            id: 'test-gateway-endpoint',
            path: '/workshop/s3-from-vpc/test-gateway-endpoint',
            label: { en: '5.3.2 Test Gateway Endpoint', vi: '5.3.2 Kiểm Tra Gateway Endpoint' },
            contentKey: '5-Workshop/5.3-S3-vpc/5.3.2-test-gwe/_index',
          },
        ],
      },
      {
        id: 'workshop-s3-onprem',
        path: '/workshop/s3-from-on-premises',
        label: { en: '5.4 Access S3 from On-Premises', vi: '5.4 Truy Cập S3 từ On-Premises' },
        contentKey: '5-Workshop/5.4-S3-onprem/_index',
        children: [
          {
            id: 'prepare-onprem',
            path: '/workshop/s3-from-on-premises/prepare',
            label: { en: '5.4.1 Prepare Environment', vi: '5.4.1 Chuẩn Bị Môi Trường' },
            contentKey: '5-Workshop/5.4-S3-onprem/5.4.1-prepare/_index',
          },
          {
            id: 'create-interface-endpoint',
            path: '/workshop/s3-from-on-premises/create-interface-endpoint',
            label: { en: '5.4.2 Create Interface Endpoint', vi: '5.4.2 Tạo Interface Endpoint' },
            contentKey: '5-Workshop/5.4-S3-onprem/5.4.2-create-interface-enpoint/_index',
          },
          {
            id: 'test-interface-endpoint',
            path: '/workshop/s3-from-on-premises/test-interface-endpoint',
            label: { en: '5.4.3 Test Interface Endpoint', vi: '5.4.3 Kiểm Tra Interface Endpoint' },
            contentKey: '5-Workshop/5.4-S3-onprem/5.4.3-test-endpoint/_index',
          },
          {
            id: 'dns-simulation',
            path: '/workshop/s3-from-on-premises/dns-simulation',
            label: { en: '5.4.4 DNS Simulation', vi: '5.4.4 Mô Phỏng DNS' },
            contentKey: '5-Workshop/5.4-S3-onprem/5.4.4-dns-simulation/_index',
          },
        ],
      },
      {
        id: 'endpoint-policy',
        path: '/workshop/endpoint-policy',
        label: { en: '5.5 Endpoint Policies', vi: '5.5 Chính Sách Endpoint' },
        contentKey: '5-Workshop/5.5-Policy/_index',
      },
      {
        id: 'cleanup',
        path: '/workshop/cleanup',
        label: { en: '5.6 Clean Up', vi: '5.6 Dọn Dẹp' },
        contentKey: '5-Workshop/5.6-Cleanup/_index',
      },
    ],
  },
  {
    id: 'evaluation',
    path: '/evaluation',
    label: { en: '6. Self-Assessment', vi: '6. Tự Đánh Giá' },
    summary: { en: 'A structured reflection on skills and growth.', vi: 'Đánh giá có hệ thống về kỹ năng và sự phát triển.' },
    icon: 'evaluation',
    contentKey: '6-Self-evaluation/_index',
  },
  {
    id: 'feedback',
    path: '/feedback',
    label: { en: '7. Sharing & Feedback', vi: '7. Chia Sẻ & Phản Hồi' },
    summary: { en: 'Closing notes, feedback, and next steps.', vi: 'Ghi chú tổng kết, phản hồi và bước tiếp theo.' },
    icon: 'feedback',
    contentKey: '7-Feedback/_index',
  },
];

export interface FlatNavigationItem extends NavigationItem {
  parents: NavigationItem[];
}

export function flattenNavigation(items = navigation, parents: NavigationItem[] = []): FlatNavigationItem[] {
  return items.flatMap((item) => [
    { ...item, parents },
    ...flattenNavigation(item.children ?? [], [...parents, item]),
  ]);
}

export const flatNavigation = flattenNavigation();

export function findNavigationItem(pathname: string) {
  return flatNavigation.find((item) => item.path === pathname);
}

export function findRouteForContentLink(href: string) {
  const cleanHref = href.split(/[?#]/)[0].replace(/\\/g, '/').replace(/\/$/, '');
  const segment = cleanHref.split('/').filter(Boolean).at(-1)?.toLowerCase();
  if (!segment) return undefined;

  const semanticSegment = segment.replace(/^\d+(?:\.\d+)*-?/, '');
  return flatNavigation.find((item) => {
    const contentSegment = item.contentKey?.split('/').filter(Boolean).at(-2)?.toLowerCase();
    if (!contentSegment) return false;
    return contentSegment === segment || contentSegment.replace(/^\d+(?:\.\d+)*-?/, '') === semanticSegment;
  })?.path;
}
