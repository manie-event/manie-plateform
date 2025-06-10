interface ProgressReport {
  code: string;
  sub: string;
  grad: string;
  marks: string;
  remarks: string;
  statuscolor: string;
  remarkcolor: string;
}

interface TeacherSkill {
  code: string;
  sub: string;
  grad: string;
  marks: string;
  statuscolor: string;
}

interface StudentProgressReport {
  code: string;
  sub: string;
  grad: string;
  marks: string;
  remarks: string;
  statuscolor: string;
  remarkcolor: string;
}

export type { ProgressReport, TeacherSkill, StudentProgressReport };
