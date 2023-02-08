import {camelizeKeys} from 'humps';
import {Channel} from 'phoenix';
import {useEffect, useRef} from 'react';

export function useEventHandler(
  channel: Channel | null,
  event: string,
  handler: Function,
) {
  const handlerFun = useRef(handler);
  handlerFun.current = handler;

  useEffect(() => {
    if (channel === null) {
      return;
    }

    const ref = channel.on(event, message => {
      handlerFun.current(camelizeKeys(message));
    });

    return () => {
      channel.off(event, ref);
    };
  }, [channel, event]);
}