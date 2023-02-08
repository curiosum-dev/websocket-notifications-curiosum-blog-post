import {SocketContext} from '../context/socketContext';
import {Context, useContext, useRef, useState} from 'react';
import {decamelizeKeys} from 'humps';
import {useDeepCompareEffect} from 'ahooks';
import {Channel, Push, Socket} from 'phoenix';

export function useChannel(
  topic: string,
  params: Record<string, any>,
  onJoin: Function,
  onClose = () => {},
) {
  const {socket} = useContext<{socket: Socket}>(
    SocketContext as Context<{socket: Socket}>,
  );
  const [channel, setChannel] = useState<Channel | null>(null);

  const onJoinFun = useRef(onJoin);
  onJoinFun.current = onJoin;

  useDeepCompareEffect(() => {
    if (socket === null) {
      return;
    }
    const ch = socket.channel(topic, params);
    ch.join().receive('ok', message => {
      onJoinFun.current(ch, message);
    });
    setChannel(ch);

    ch.onClose(onClose);

    return () => {
      ch.leave();
      setChannel(null);
    };
  }, [socket, topic, params]);

  return channel;
}

function pushPromise(push: Push) {
  return new Promise((resolve, reject) => {
    if (!push) {
      return reject('no push');
    }
    push.receive('ok', resolve).receive('error', reject);
    // .receive('timeout', reject('timeout'));
  });
}

export function sendMessage(
  channel: Channel,
  event: string,
  payload: Record<string, any>,
) {
  return pushPromise(
    channel.push(event, decamelizeKeys(payload, {separator: '_'})),
  );
}