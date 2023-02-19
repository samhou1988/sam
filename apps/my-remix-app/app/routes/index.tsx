import { Button } from '@sam/ui';
export default function Index() {
  return (
    <div>
      <Button onClick={() => console.log('clicked')}>Click me</Button>
    </div>
  );
}
