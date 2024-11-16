import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

const TasksPage = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}
        salam
      </Modal>

      <Button onClick={open}>Open centered Modal</Button>
    </>
  );
}

export default TasksPage
