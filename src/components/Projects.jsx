import ProjectCard from './ProjectCard'

const projects = [
  {
    tag: 'NLP / Real-time',
    name: 'Audio-based LLM: Vietnamese Real-time Voice Chat System',
    description:
      'Hệ thống trò chuyện giọng nói tiếng Việt hoạt động theo thời gian thực, tích hợp trình duyệt và backend FastAPI WebSocket.',
    highlights: [
      'Tích hợp Whisper STT, Gemini LLM và Piper TTS',
      'Đạt RTF 0.46 và độ trễ trung bình khoảng 1.7 giây',
      'Hiệu suất thời gian thực ổn định',
    ],
    techs: ['FastAPI', 'WebSocket', 'Whisper', 'Gemini LLM', 'Piper TTS', 'Python'],
    githubUrl: 'https://github.com/nguyentheanh822',
    accentColor: '#64b5f6',
    videoSrc: '/Demo_Audio-based_LLM.mp4',
  },
  {
    tag: 'Computer Vision / Multimodal',
    name: 'Temporal Coherence Framework for Multimodal Video Retrieval',
    description:
      'Hệ thống tìm kiếm sự kiện trong video sử dụng kết hợp đa phương thức (multimodal fusion) và mô hình hóa thời gian cho phép tìm kiếm bằng cả văn bản và hình ảnh.',
    highlights: [
      'Tích hợp CLIP, PaddleOCR, Whisper, AutoShot',
      'Đạt 95% accuracy trên dataset AIC2025',
      'Độ trễ truy vấn dưới 1 giây',
    ],
    techs: ['CLIP', 'PaddleOCR', 'Whisper', 'Faiss', 'AutoShot', 'Python'],
    githubUrl: 'https://github.com/nguyentheanh822',
    accentColor: '#a78bfa',
    imageSrc: '/Demo_VR.jpg',
  },
  {
    tag: 'Research / Dataset',
    name: 'VSL-GH: Vietnamese Sign Language Dataset',
    description:
      'Bộ dữ liệu ngôn ngữ ký hiệu tiếng Việt (VSL) ở cấp độ câu đầu tiên dành cho giao tiếp chăm sóc sức khỏe, bao gồm 8.400 video đa góc quay từ 6 người Điếc.',
    highlights: [
      'Đạt 66.82 BLEU-4 với mô hình Skeleton Transformer',
      'Benchmark nhiều kiến trúc: GRU, BiLSTM, Transformer, ST-GCN',
      'Hỗ trợ cả CSLR và SLT với MediaPipe Holistic keypoints',
    ],
    techs: ['PyTorch', 'MediaPipe', 'Transformer', 'GRU', 'BiLSTM', 'ST-GCN'],
    githubUrl: 'https://github.com/nguyentheanh822',
    accentColor: '#34d399',
    videoSrc: '/Demo_SLT.mp4',
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="section__label fade-up">
          <span className="section__label-line" />
          Dự án nổi bật
        </p>
        <h2 className="section__title fade-up">
          Những gì mình đã xây dựng
        </h2>
        <div className="projects-grid stagger">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
