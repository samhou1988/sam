export function Button(props: any) {
  console.log('ui buttons')
  return <button onClick={() => props.onClick()}>{props.children}</button>;
}
export default Button;
