export type BotReplyProps = {
  reply: string;
};

export type DownloadDockerWallProps = {
  handleCheckIsDockerRunning: () => void;
  isDockerRunning: boolean;
};

export type ServicesCardProps = {
  title: string;
  className: string;
  icon: string;
  status: "running" | "stopped" | "not_downloaded" | "downloading" | "available_memory_less_than_container" | "system_memory_less_than_container";
};

export type SidebarProps = {
  toggleStatus: boolean;
  toggle: () => void;
};

export type SpinnerProps = {
  className?: string;
};

export type UserReplyProps = {
  reply: string;
};

export type DashboardIconPorps = {
  className: string;
};

export type ServiceIconPorps = {
  className: string;
};

export type PipelineIconProps = {
  className: string;
};

export type DocumentationIconProps = {
  className: string;
};

export type SettingIconProps = {
  className: string;
};

export type CloseIconProps = {
  className: string;
};

export type NavLinkItemProps = {
  icon: React.ReactNode;
  label: string;
  to: string;
};

export type WarningModalProps = {
  onCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onOk: (e: React.MouseEvent<HTMLButtonElement>) => void;
  cancelButtonText?: string;
  okButtonText?: string;
  icon?: React.ReactNode;
  title?: string;
  description: string;
};