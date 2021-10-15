export type EditAreaType = {
  children: any;
  enabled: boolean;
  modified: boolean;
  saving: boolean;
  set_modified: Function;
  set_selected: Function;
  state: any;
}
export type EditBoxProps = {}
export type EditButtonsType = {
  action: Function;
  enabled: boolean;
  reset: Function;
}
export type EditWrapProps = {
  enabled: boolean;
  saving: boolean;
  selected: boolean;
}