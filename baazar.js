$(document).ready(function() {
    // Función para mostrar el contador regresivo
    function startCountdown(seconds, callback) {
        // Crear elemento para el contador
        var countdownElement = $('<div id="countdown" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 48px; color: #00ff00; font-family: monospace; text-shadow: 0 0 5px #00ff00;"></div>');
        $(document.body).append(countdownElement);
        
        var countdown = seconds;
        countdownElement.text(countdown);
        
        // Actualizar el contador cada segundo
        var countdownInterval = setInterval(function() {
            countdown--;
            countdownElement.text(countdown);
            
            // Cuando llegue a 0, limpiar y ejecutar callback
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                countdownElement.remove();
                callback();
            }
        }, 1000);
    }

    // Iniciar el contador de 10 segundos
    startCountdown(10, function() {
        // Limpiar la pantalla antes de mostrar la consola
        $(document.body).empty();
        
        // Contenido completo de la consola
        var dmesg = `<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span>Booting Linux on physical CPU 0x0 NoWi System_Emulator
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span>Linux version 4.19.66-v7+ (dom@buildbot) (gcc version 4.9.3 (crosstool-NG crosstool-ng-1.22.0-88-g8460611)) #1253 SMP Thu Aug 15 11:49:46 BST 2019
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">CPU</span>: ARMv7 Processor [410fd034] revision 4 (ARMv7), cr=10c5383d
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">CPU</span>: div instructions available: patching division code
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">CPU</span>: PIPT / VIPT nonaliasing data cache, VIPT aliasing instruction cache
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">OF</span>: fdt: Machine model: Raspberry Pi 3 Model B Plus Rev 1.3
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">Memory policy</span>: Data cache writealloc
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">cma</span>: Reserved 8 MiB at 0x3dc00000
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">On node 0 totalpages</span>: 255488
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">&nbsp;&nbsp;Normal zone</span>: 2246 pages used for memmap
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">&nbsp;&nbsp;Normal zone</span>: 0 pages reserved
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">&nbsp;&nbsp;Normal zone</span>: 255488 pages, LIFO batch:63
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">random</span>: get_random_bytes called from start_kernel+0xac/0x4b4 with crng_init=0
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">percpu</span>: Embedded 17 pages/cpu s39488 r8192 d21952 u69632
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">pcpu-alloc</span>: s39488 r8192 d21952 u69632 alloc=17*4096
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">pcpu-alloc</span>: [0] 0 [0] 1 [0] 2 [0] 3 
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">Built 1 zonelists, mobility grouping on.&nbsp;&nbsp;Total pages</span>: 253242
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">Kernel command line</span>: coherent_pool=1M 8250.nr_uarts=0 bcm2708_fb.fbwidth=656 bcm2708_fb.fbheight=416 bcm2708_fb.fbdepth=16 bcm2708_fb.fbswap=1 vc_mem.mem_base=0x3f000000 vc_mem.mem_size=0x3f600000&nbsp;&nbsp;dwc_otg.lpm_enable=0 console=ttyS0,115200 console=tty1 root=PARTUUID=3e7f154b-02 rootfstype=ext4 elevator=deadline fsck.repair=yes rootwait
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">Dentry cache hash table entries</span>: 131072 (order: 7, 524288 bytes)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">Inode-cache hash table entries</span>: 65536 (order: 6, 262144 bytes)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">Memory</span>: 989816K/1021952K available (8192K kernel code, 629K rwdata, 2176K rodata, 1024K init, 821K bss, 23944K reserved, 8192K cma-reserved)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">Virtual kernel memory layout:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vector&nbsp;&nbsp;</span>: 0xffff0000 - 0xffff1000&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;&nbsp;4 kB)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fixmap&nbsp;&nbsp;: 0xffc00000 - 0xfff00000&nbsp;&nbsp;&nbsp;(3072 kB)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vmalloc : 0xbe800000 - 0xff800000&nbsp;&nbsp;&nbsp;(1040 MB)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lowmem&nbsp;&nbsp;: 0x80000000 - 0xbe600000&nbsp;&nbsp;&nbsp;( 998 MB)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;modules : 0x7f000000 - 0x80000000&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;16 MB)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.text : 0x(ptrval) - 0x(ptrval)&nbsp;&nbsp;&nbsp;(9184 kB)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.init : 0x(ptrval) - 0x(ptrval)&nbsp;&nbsp;&nbsp;(1024 kB)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.data : 0x(ptrval) - 0x(ptrval)&nbsp;&nbsp;&nbsp;( 630 kB)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.bss : 0x(ptrval) - 0x(ptrval)&nbsp;&nbsp;&nbsp;( 822 kB)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">SLUB</span>: HWalign=64, Order=0-3, MinObjects=0, CPUs=4, Nodes=1
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">ftrace</span>: allocating 26394 entries in 78 pages
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">rcu</span>: Hierarchical RCU implementation.
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">NR_IRQS</span>: 16, nr_irqs: 16, preallocated irqs: 16
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">arch_timer</span>: cp15 timer(s) running at 19.20MHz (phys).
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000000] </span><span style="color:olive;">clocksource</span>: arch_sys_counter: mask: 0xffffffffffffff max_cycles: 0x46d987e47, max_idle_ns: 440795202767 ns
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000007] </span><span style="color:olive;">sched_clock</span>: 56 bits at 19MHz, resolution 52ns, wraps every 4398046511078ns
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000023] </span>Switching to timer-based delay loop, resolution 52ns
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000293] </span><span style="color:olive;">Console</span>: colour dummy device 80x30
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000921] </span>console [tty1] enabled
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.000978] </span>Calibrating delay loop (skipped), value calculated using timer frequency.. 38.40 BogoMIPS (lpj=192000)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.001023] </span><span style="color:olive;">pid_max</span>: default: 32768 minimum: 301
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.001379] </span><span style="color:olive;">Mount-cache hash table entries</span>: 2048 (order: 1, 8192 bytes)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.001415] </span><span style="color:olive;">Mountpoint-cache hash table entries</span>: 2048 (order: 1, 8192 bytes)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.002349] </span><span style="color:olive;">CPU</span>: Testing write buffer coherency: ok
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.002837] </span><span style="color:olive;">CPU0</span>: thread -1, cpu 0, socket 0, mpidr 80000000
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.003504] </span>Setting up static identity map for 0x100000 - 0x10003c
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.003672] </span><span style="color:olive;">rcu</span>: Hierarchical SRCU implementation.
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.004485] </span><span style="color:olive;">smp</span>: Bringing up secondary CPUs ...
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.005347] </span><span style="color:olive;">CPU1</span>: thread -1, cpu 1, socket 0, mpidr 80000001
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.006271] </span><span style="color:olive;">CPU2</span>: thread -1, cpu 2, socket 0, mpidr 80000002
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.007134] </span><span style="color:olive;">CPU3</span>: thread -1, cpu 3, socket 0, mpidr 80000003
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.007254] </span><span style="color:olive;">smp</span>: Brought up 1 node, 4 CPUs
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.007336] </span><span style="color:olive;">SMP</span>: Total of 4 processors activated (153.60 BogoMIPS).
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.007360] </span><span style="color:olive;">CPU</span>: All CPU(s) started in HYP mode.
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.007380] </span><span style="color:olive;">CPU</span>: Virtualization extensions available.
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.008384] </span><span style="color:olive;">devtmpfs</span>: initialized
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.021634] </span><span style="color:olive;">VFP support v0.3</span>: implementor 41 architecture 3 part 40 variant 3 rev 4
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.021907] </span><span style="color:olive;">clocksource</span>: jiffies: mask: 0xffffffff max_cycles: 0xffffffff, max_idle_ns: 19112604462750000 ns
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.021955] </span><span style="color:olive;">futex hash table entries</span>: 1024 (order: 4, 65536 bytes)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.022566] </span><span style="color:olive;">pinctrl core</span>: initialized pinctrl subsystem
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.023438] </span><span style="color:olive;">NET</span>: Registered protocol family 16
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.026398] </span><span style="color:olive;">DMA</span>: preallocated 1024 KiB pool for atomic coherent allocations
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.032111] </span><span style="color:olive;">hw-breakpoint</span>: found 5 (+1 reserved) breakpoint and 4 watchpoint registers.
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.032148] </span><span style="color:olive;">hw-breakpoint</span>: maximum watchpoint size is 8 bytes.
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.032373] </span><span style="color:olive;">Serial</span>: AMBA PL011 UART driver
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.034825] </span><span style="color:olive;">bcm2835-mbox 3f00b880.mailbox</span>: mailbox enabled
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.069883] </span><span style="color:olive;">bcm2835-dma 3f007000.dma</span>: DMA legacy API manager at (ptrval), dmachans=0x1
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.071800] </span>SCSI subsystem initialized
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.072046] </span><span style="color:olive;">usbcore</span>: registered new interface driver usbfs
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.072122] </span><span style="color:olive;">usbcore</span>: registered new interface driver hub
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.072234] </span><span style="color:olive;">usbcore</span>: registered new device driver usb
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.090295] </span><span style="color:olive;">raspberrypi-firmware soc:firmware</span>: Attached to firmware from 2019-08-15 12:07, variant start_cd
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.100124] </span><span style="color:olive;">raspberrypi-firmware soc:firmware</span>: Firmware hash is 0e6daa5106dd4164474616408e0dc24f997ffcf3
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.111776] </span><span style="color:olive;">clocksource</span>: Switched to clocksource arch_sys_counter
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.201087] </span><span style="color:olive;">VFS</span>: Disk quotas dquot_6.6.0
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.201199] </span><span style="color:olive;">VFS</span>: Dquot-cache hash table entries: 1024 (order 0, 4096 bytes)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.201375] </span><span style="color:olive;">FS-Cache</span>: Loaded
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.201599] </span><span style="color:olive;">CacheFiles</span>: Loaded
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.211678] </span><span style="color:olive;">NET</span>: Registered protocol family 2
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.212497] </span><span style="color:olive;">tcp_listen_portaddr_hash hash table entries</span>: 512 (order: 0, 6144 bytes)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.212561] </span><span style="color:olive;">TCP established hash table entries</span>: 8192 (order: 3, 32768 bytes)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.212691] </span><span style="color:olive;">TCP bind hash table entries</span>: 8192 (order: 4, 65536 bytes)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.212896] </span><span style="color:olive;">TCP</span>: Hash tables configured (established 8192 bind 8192)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.213048] </span><span style="color:olive;">UDP hash table entries</span>: 512 (order: 2, 16384 bytes)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.213114] </span><span style="color:olive;">UDP-Lite hash table entries</span>: 512 (order: 2, 16384 bytes)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.213444] </span><span style="color:olive;">NET</span>: Registered protocol family 1
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.214026] </span><span style="color:olive;">RPC</span>: Registered named UNIX socket transport module.
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.214053] </span><span style="color:olive;">RPC</span>: Registered udp transport module.
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.214075] </span><span style="color:olive;">RPC</span>: Registered tcp transport module.
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.214097] </span><span style="color:olive;">RPC</span>: Registered tcp NFSv4.1 backchannel transport module.
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.215822] </span><span style="color:olive;">hw perfevents</span>: enabled with armv7_cortex_a7 PMU driver, 7 counters available
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.218866] </span>Initialise system trusted keyrings
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.219069] </span><span style="color:olive;">workingset</span>: timestamp_bits=14 max_order=18 bucket_order=4
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.229057] </span><span style="color:olive;">FS-Cache</span>: Netfs 'nfs' registered for caching
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.229653] </span><span style="color:olive;">NFS</span>: Registering the id_resolver key type
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.229699] </span>Key type id_resolver registered
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.229721] </span>Key type id_legacy registered
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.229753] </span><span style="color:olive;">nfs4filelayout_init</span>: NFSv4 File Layout Driver Registering...
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.232118] </span>Key type asymmetric registered
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.232149] </span>Asymmetric key parser 'x509' registered
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.232217] </span>Block layer SCSI generic (bsg) driver version 0.4 loaded (major 250)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.232402] </span>io scheduler noop registered
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.232426] </span>io scheduler deadline registered (default)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.232627] </span>io scheduler cfq registered
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.232651] </span>io scheduler mq-deadline registered (default)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.232676] </span>io scheduler kyber registered
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.234869] </span><span style="color:olive;">bcm2708_fb soc:fb</span>: FB found 1 display(s)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.244320] </span><span style="color:olive;">Console</span>: switching to colour frame buffer device 82x26
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.251117] </span><span style="color:olive;">bcm2708_fb soc:fb</span>: Registered framebuffer for display 0, size 656x416
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.257867] </span><span style="color:olive;">bcm2835-rng 3f104000.rng</span>: hwrng registered
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.260544] </span><span style="color:olive;">vc-mem</span>: phys_addr:0x00000000 mem_base=0x3f000000 mem_size:0x3f600000(1014 MiB)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.265873] </span><span style="color:olive;">vc-sm</span>: Videocore shared memory driver
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.268623] </span><span style="color:olive;">gpiomem-bcm2835 3f200000.gpiomem</span>: Initialised: Registers at 0x3f200000
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.284514] </span><span style="color:olive;">brd</span>: module loaded
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.297160] </span><span style="color:olive;">loop</span>: module loaded
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.300213] </span>Loading iSCSI transport class v2.0-870.
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.303390] </span><span style="color:olive;">libphy</span>: Fixed MDIO Bus: probed
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.305904] </span><span style="color:olive;">usbcore</span>: registered new interface driver lan78xx
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.308359] </span><span style="color:olive;">usbcore</span>: registered new interface driver smsc95xx
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.310711] </span><span style="color:olive;">dwc_otg</span>: version 3.00a 10-AUG-2012 (platform bus)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.341026] </span><span style="color:olive;">dwc_otg 3f980000.usb</span>: base=(ptrval)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.543656] </span><span style="color:olive;">Core Release</span><span style="font-weight:bold;">: 2.80a</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.546039] </span><span style="font-weight:bold;">Setting default values for core params</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.548486] </span><span style="font-weight:bold;">Finished setting default values for core params</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.751230] </span><span style="font-weight:bold;">Using Buffer DMA mode</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.753637] </span><span style="font-weight:bold;">Periodic Transfer Interrupt Enhancement - disabled</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.756064] </span><span style="font-weight:bold;">Multiprocessor Interrupt Enhancement - disabled</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.758436] </span><span style="color:olive;">OTG VER PARAM</span><span style="font-weight:bold;">: 0, OTG VER FLAG: 0</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.760774] </span><span style="font-weight:bold;">Dedicated Tx FIFOs mode</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.763527] </span><span style="color:olive;">WARN::dwc_otg_hcd_init:1045</span><span style="font-weight:bold;">: FIQ DMA bounce buffers: virt = bdd14000 dma = 0xfdd14000 len=9024</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.768105] </span><span style="font-weight:bold;">FIQ FSM acceleration enabled for :
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Non-periodic Split Transactions
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Periodic Split Transactions
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;High-Speed Isochronous Endpoints
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Interrupt/Control Split Transaction hack enabled</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.779023] </span><span style="color:olive;">dwc_otg</span>: Microframe scheduler enabled
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.779077] </span><span style="color:olive;">WARN::hcd_init_fiq:457</span><span style="font-weight:bold;">: FIQ on core 1</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.781297] </span><span style="color:olive;">WARN::hcd_init_fiq:458</span><span style="font-weight:bold;">: FIQ ASM at 80654f4c length 36</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.783508] </span><span style="color:olive;">WARN::hcd_init_fiq:497</span><span style="font-weight:bold;">: MPHI regs_base at be810000</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.785786] </span><span style="color:olive;">dwc_otg 3f980000.usb</span>: DWC OTG Controller
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.788041] </span><span style="color:olive;">dwc_otg 3f980000.usb</span>: new USB bus registered, assigned bus number 1
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.790361] </span><span style="color:olive;">dwc_otg 3f980000.usb</span>: irq 56, io mem 0x00000000
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.792685] </span><span style="color:olive;">Init</span><span style="font-weight:bold;">: Port Power? op_state=1</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.794923] </span><span style="color:olive;">Init</span><span style="font-weight:bold;">: Power Port (0)</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.797332] </span><span style="color:olive;">usb usb1</span>: New USB device found, idVendor=1d6b, idProduct=0002, bcdDevice= 4.19
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.801864] </span><span style="color:olive;">usb usb1</span>: New USB device strings: Mfr=3, Product=2, SerialNumber=1
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.804277] </span><span style="color:olive;">usb usb1</span>: Product: DWC OTG Controller
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.806640] </span><span style="color:olive;">usb usb1</span>: Manufacturer: Linux 4.19.66-v7+ dwc_otg_hcd
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.809058] </span><span style="color:olive;">usb usb1</span>: SerialNumber: 3f980000.usb
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.812017] </span><span style="color:olive;">hub 1-0:1.0</span>: USB hub found
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.814295] </span><span style="color:olive;">hub 1-0:1.0</span>: 1 port detected
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.817044] </span><span style="color:olive;">dwc_otg</span>: FIQ enabled
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.817050] </span><span style="color:olive;">dwc_otg</span>: NAK holdoff enabled
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.817056] </span><span style="color:olive;">dwc_otg</span>: FIQ split-transaction FSM enabled
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.817066] </span>Module dwc_common_port init
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.817339] </span><span style="color:olive;">usbcore</span>: registered new interface driver usb-storage
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.819787] </span><span style="color:olive;">mousedev</span>: PS/2 mouse device common for all mice
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.822963] </span><span style="color:olive;">bcm2835-wdt bcm2835-wdt</span>: Broadcom BCM2835 watchdog timer
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.825588] </span><span style="color:olive;">bcm2835-cpufreq</span>: min=600000 max=1400000
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.828393] </span><span style="color:olive;">sdhci</span>: Secure Digital Host Controller Interface driver
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.830801] </span><span style="color:olive;">sdhci</span>: Copyright(c) Pierre Ossman
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.833610] </span><span style="color:olive;">mmc-bcm2835 3f300000.mmcnr</span>: could not get clk, deferring probe
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.836532] </span><span style="color:olive;">sdhost-bcm2835 3f202000.mmc</span>: could not get clk, deferring probe
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.839209] </span><span style="color:olive;">sdhci-pltfm</span>: SDHCI platform and OF driver helper
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.843333] </span><span style="color:olive;">ledtrig-cpu</span>: registered to indicate activity on CPUs
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.846064] </span><span style="color:olive;">hidraw</span>: raw HID events driver (C) Jiri Kosina
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.848819] </span><span style="color:olive;">usbcore</span>: registered new interface driver usbhid
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.851452] </span><span style="color:olive;">usbhid</span>: USB HID core driver
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.854783] </span><span style="color:olive;">vchiq</span>: vchiq_init_state: slot_zero = (ptrval), is_master = 0
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.858789] </span><span style="color:olive;">[vc_sm_connected_init]</span>: start
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.862294] </span><span style="color:olive;">vc_vchi_sm_init</span><span style="color:red;">: failed to open VCHI service (-1)</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.862302] </span><span style="color:olive;">[vc_sm_connected_init]</span><span style="color:red;">: failed to initialize shared memory service</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.867396] </span><span style="color:olive;">[vc_sm_connected_init]</span>: end - returning -1
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.871102] </span>Initializing XFRM netlink socket
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.873690] </span><span style="color:olive;">NET</span>: Registered protocol family 17
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.876372] </span>Key type dns_resolver registered
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.879369] </span>Registering SWP/SWPB emulation handler
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.882523] </span>registered taskstats version 1
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.884986] </span>Loading compiled-in X.509 certificates
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.894686] </span><span style="color:olive;">uart-pl011 3f201000.serial</span>: cts_event_workaround enabled
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.897272] </span><span style="color:olive;">3f201000.serial</span>: ttyAMA0 at MMIO 0x3f201000 (irq = 81, base_baud = 0) is a PL011 rev2
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.904112] </span><span style="color:olive;">mmc-bcm2835 3f300000.mmcnr</span>: mmc_debug:0 mmc_debug2:0
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.906666] </span><span style="color:olive;">mmc-bcm2835 3f300000.mmcnr</span>: DMA channel allocated
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.935147] </span><span style="color:olive;">sdhost</span>: log_buf @ (ptrval) (fdd13000)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.972634] </span><span style="color:olive;">mmc1</span><span style="font-weight:bold;">: queuing unknown CIS tuple 0x80 (2 bytes)</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.976668] </span><span style="color:olive;">mmc1</span><span style="font-weight:bold;">: queuing unknown CIS tuple 0x80 (3 bytes)</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.980596] </span><span style="color:olive;">mmc1</span><span style="font-weight:bold;">: queuing unknown CIS tuple 0x80 (3 bytes)</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.985708] </span><span style="color:olive;">mmc1</span><span style="font-weight:bold;">: queuing unknown CIS tuple 0x80 (7 bytes)</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.987900] </span><span style="color:olive;">mmc0</span>: sdhost-bcm2835 loaded - DMA enabled (&gt;1)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.991309] </span>of_cfs_init
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.993492] </span><span style="color:olive;">of_cfs_init</span>: OK
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;0.996028] </span>Waiting for root device PARTUUID=3e7f154b-02...
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.041997] </span><span style="font-weight:bold;">Indeed it is in host mode hprt0 = 00021501</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.109719] </span><span style="color:olive;">random</span>: fast init done
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.127587] </span><span style="color:olive;">mmc0</span><span style="font-weight:bold;">: host does not support reading read-only switch, assuming write-enable</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.135810] </span><span style="color:olive;">mmc0</span>: new high speed SDHC card at address aaaa
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.139285] </span><span style="color:olive;">mmcblk0</span>: mmc0:aaaa SC32G 29.7 GiB
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.148134] </span><span style="color:olive;">mmc1</span>: new high speed SDIO card at address 0001
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.150906] </span><span style="color:olive;"> mmcblk0</span>: p1 p2
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.187964] </span><span style="color:olive;">EXT4-fs (mmcblk0p2)</span>: mounted filesystem with ordered data mode. Opts: (null)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.192305] </span><span style="color:olive;">VFS</span>: Mounted root (ext4 filesystem) readonly on device 179:2.
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.208766] </span><span style="color:olive;">devtmpfs</span>: mounted
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.216330] </span><span style="color:olive;">Freeing unused kernel memory</span>: 1024K
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.232196] </span>Run /sbin/init as init process
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.251824] </span><span style="color:olive;">usb 1-1</span>: new high-speed USB device number 2 using dwc_otg
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.254466] </span><span style="font-weight:bold;">Indeed it is in host mode hprt0 = 00001101</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.492125] </span><span style="color:olive;">usb 1-1</span>: New USB device found, idVendor=0424, idProduct=2514, bcdDevice= b.b3
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.497438] </span><span style="color:olive;">usb 1-1</span>: New USB device strings: Mfr=0, Product=0, SerialNumber=0
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.500968] </span><span style="color:olive;">hub 1-1:1.0</span>: USB hub found
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.503952] </span><span style="color:olive;">hub 1-1:1.0</span>: 4 ports detected
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.703771] </span><span style="color:olive;">systemd[1]</span>: System time before build time, advancing clock.
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.821880] </span><span style="color:olive;">usb 1-1.1</span>: new high-speed USB device number 3 using dwc_otg
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.836529] </span><span style="color:olive;">NET</span>: Registered protocol family 10
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.840569] </span>Segment Routing with IPv6
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.875082] </span><span style="color:olive;">random</span>: systemd: uninitialized urandom read (16 bytes read)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.880300] </span><span style="color:olive;">random</span>: systemd: uninitialized urandom read (16 bytes read)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.889044] </span><span style="color:olive;">systemd[1]</span>: systemd 232 running in system mode. (+PAM +AUDIT +SELINUX +IMA +APPARMOR +SMACK +SYSVINIT +UTMP +LIBCRYPTSETUP +GCRYPT +GNUTLS +ACL +XZ +LZ4 +SECCOMP +BLKID +ELFUTILS +KMOD +IDN)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.898040] </span><span style="color:olive;">systemd[1]</span>: Detected architecture arm.
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.921845] </span><span style="color:olive;">systemd[1]</span>: Set hostname to &lt;raspberrypi&gt;.
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.952643] </span><span style="color:olive;">usb 1-1.1</span>: New USB device found, idVendor=0424, idProduct=2514, bcdDevice= b.b3
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.958011] </span><span style="color:olive;">usb 1-1.1</span>: New USB device strings: Mfr=0, Product=0, SerialNumber=0
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.972832] </span><span style="color:olive;">hub 1-1.1:1.0</span>: USB hub found
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.975978] </span><span style="color:olive;">hub 1-1.1:1.0</span>: 3 ports detected
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;1.985347] </span><span style="color:olive;">random</span>: systemd-sysv-ge: uninitialized urandom read (16 bytes read)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;2.331880] </span><span style="font-weight:bold;">dwc_otg_handle_wakeup_detected_intr lxstate = 2</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;2.530183] </span><span style="color:olive;">systemd[1]</span><span style="font-weight:bold;">: inetd.service: Cannot add dependency job, ignoring: Unit inetd.service is masked.</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;2.535902] </span><span style="color:olive;">systemd[1]</span><span style="font-weight:bold;">: nginx.service: Cannot add dependency job, ignoring: Unit nginx.service is masked.</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;2.569933] </span><span style="color:olive;">systemd[1]</span>: Set up automount Arbitrary Executable File Formats File System Automount Point.
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;2.580075] </span><span style="color:olive;">systemd[1]</span>: Listening on fsck to fsckd communication Socket.
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;2.587761] </span><span style="color:olive;">systemd[1]</span>: Created slice User and Session Slice.
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;2.594778] </span><span style="color:olive;">systemd[1]</span>: Listening on /dev/initctl Compatibility Named Pipe.
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;2.601867] </span><span style="color:olive;">systemd[1]</span>: Reached target Swap.
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;2.832122] </span><span style="color:olive;">usb 1-1.1.1</span>: new high-speed USB device number 4 using dwc_otg
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;2.962570] </span><span style="color:olive;">usb 1-1.1.1</span>: New USB device found, idVendor=0424, idProduct=7800, bcdDevice= 3.00
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;2.962585] </span><span style="color:olive;">usb 1-1.1.1</span>: New USB device strings: Mfr=0, Product=0, SerialNumber=0
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;3.227913] </span><span style="color:olive;">lan78xx 1-1.1.1:1.0 (unnamed net_device) (uninitialized)</span>: No External EEPROM. Setting MAC Speed
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;3.228999] </span><span style="color:olive;">libphy</span>: lan78xx-mdiobus: probed
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;3.242087] </span><span style="color:olive;">lan78xx 1-1.1.1:1.0 (unnamed net_device) (uninitialized)</span>: int urb period 64
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;3.324374] </span><span style="color:olive;">EXT4-fs (mmcblk0p2)</span>: re-mounted. Opts: (null)
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;3.444245] </span><span style="color:olive;">systemd-journald[95]</span>: Received request to flush runtime journal from PID 1
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;3.785639] </span><span style="color:olive;">vc_sm_cma</span><span style="font-weight:bold;">: module is from the staging directory, the quality is unknown, you have been warned.</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;3.788124] </span><span style="color:olive;">bcm2835_vc_sm_cma_probe</span>: Videocore shared memory driver
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;3.788139] </span><span style="color:olive;">[vc_sm_connected_init]</span>: start
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;3.789039] </span><span style="color:olive;">vc_sm_cma_vchi_init</span><span style="color:red;">: failed to open VCHI service (-1)</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;3.789057] </span><span style="color:olive;">[vc_sm_connected_init]</span><span style="color:red;">: failed to initialize shared memory service</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;3.798959] </span><span style="color:olive;">media</span>: Linux media interface: v0.10
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;3.872592] </span><span style="color:olive;">videodev</span>: Linux video capture interface: v2.00
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;3.920321] </span><span style="color:olive;">bcm2835_mmal_vchiq</span><span style="font-weight:bold;">: module is from the staging directory, the quality is unknown, you have been warned.</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;3.920326] </span><span style="color:olive;">bcm2835_mmal_vchiq</span><span style="font-weight:bold;">: module is from the staging directory, the quality is unknown, you have been warned.</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;3.946903] </span><span style="color:olive;">bcm2835_v4l2</span><span style="font-weight:bold;">: module is from the staging directory, the quality is unknown, you have been warned.</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;3.955508] </span><span style="color:olive;">bcm2835_mmal_vchiq</span><span style="color:red;">: Failed to open VCHI service connection (status=-1)</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;3.958848] </span><span style="color:olive;">bcm2835_codec</span><span style="font-weight:bold;">: module is from the staging directory, the quality is unknown, you have been warned.</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;3.968943] </span><span style="color:olive;">bcm2835_mmal_vchiq</span><span style="color:red;">: Failed to open VCHI service connection (status=-1)</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;3.975564] </span><span style="color:olive;">snd_bcm2835</span><span style="font-weight:bold;">: module is from the staging directory, the quality is unknown, you have been warned.</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;4.019330] </span><span style="color:olive;">bcm2835_audio soc:audio</span>: card created with 8 channels
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;4.140078] </span><span style="color:olive;">cfg80211</span>: Loading compiled-in X.509 certificates for regulatory database
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;4.216095] </span><span style="color:olive;">cfg80211</span>: Loaded X.509 cert 'sforshee: 00b28ddf47aef9cea7'
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;4.311259] </span><span style="color:olive;">brcmfmac</span>: F1 signature read @0x18000000=0x15264345
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;4.321913] </span><span style="color:olive;">brcmfmac</span><span style="color:red;">: brcmf_fw_alloc_request: using brcm/brcmfmac43455-sdio for chip BCM4345/6</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;4.322848] </span><span style="color:olive;">usbcore</span>: registered new interface driver brcmfmac
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;4.560933] </span><span style="color:olive;">brcmfmac</span><span style="color:red;">: brcmf_fw_alloc_request: using brcm/brcmfmac43455-sdio for chip BCM4345/6</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;4.597157] </span><span style="color:olive;">brcmfmac</span><span style="color:red;">: brcmf_c_preinit_dcmds: Firmware: BCM4345/6 wl0: Feb 27 2018 03:15:32 version 7.45.154 (r684107 CY) FWID 01-4fbe0b04</span>
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;5.192740] </span><span style="color:olive;">uart-pl011 3f201000.serial</span>: no DMA platform data
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;5.286191] </span><span style="color:olive;">random</span>: crng init done
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;5.286206] </span><span style="color:olive;">random</span>: 7 urandom warning(s) missed due to ratelimiting
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;5.733892] </span><span style="color:olive;">IPv6</span>: ADDRCONF(NETDEV_UP): eth0: link is not ready
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;5.766202] </span><span style="color:olive;">IPv6</span>: ADDRCONF(NETDEV_UP): wlan0: link is not ready
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;5.766224] </span><span style="color:olive;">brcmfmac</span>: power management disabled
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;5.812408] </span>Adding 102396k swap on /var/swap.&nbsp;&nbsp;Priority:-2 extents:1 across:102396k SSFS
<span style="color:green;">[&nbsp;&nbsp;&nbsp;&nbsp;6.645696] </span><span style="color:olive;">IPv6</span>: ADDRCONF(NETDEV_CHANGE): eth0: link becomes ready
<span style="color:green;">[&nbsp;&nbsp;&nbsp;11.633595] </span><span style="color:olive;">Bluetooth</span>: Core ver 2.22
<span style="color:green;">[&nbsp;&nbsp;&nbsp;11.633684] </span><span style="color:olive;">NET</span>: Registered protocol family 31
<span style="color:green;">[&nbsp;&nbsp;&nbsp;11.633691] </span><span style="color:olive;">Bluetooth</span>: HCI device and connection manager initialized
<span style="color:green;">[&nbsp;&nbsp;&nbsp;11.633715] </span><span style="color:olive;">Bluetooth</span>: HCI socket layer initialized
<span style="color:green;">[&nbsp;&nbsp;&nbsp;11.633729] </span><span style="color:olive;">Bluetooth</span>: L2CAP socket layer initialized
<span style="color:green;">[&nbsp;&nbsp;&nbsp;11.633767] </span><span style="color:olive;">Bluetooth</span>: SCO socket layer initialized
<span style="color:green;">[&nbsp;&nbsp;&nbsp;11.652572] </span><span style="color:olive;">Bluetooth</span>: HCI UART driver ver 2.3
<span style="color:green;">[&nbsp;&nbsp;&nbsp;11.652588] </span><span style="color:olive;">Bluetooth</span>: HCI UART protocol H4 registered
<span style="color:green;">[&nbsp;&nbsp;&nbsp;11.652676] </span><span style="color:olive;">Bluetooth</span>: HCI UART protocol Three-wire (H5) registered
<span style="color:green;">[&nbsp;&nbsp;&nbsp;11.652887] </span><span style="color:olive;">Bluetooth</span>: HCI UART protocol Broadcom registered
<span style="color:green;">[&nbsp;&nbsp;&nbsp;12.069923] </span><span style="color:olive;">Bluetooth</span>: BNEP (Ethernet Emulation) ver 1.3
<span style="color:green;">[&nbsp;&nbsp;&nbsp;12.069932] </span><span style="color:olive;">Bluetooth</span>: BNEP filters: protocol multicast
<span style="color:green;">[&nbsp;&nbsp;&nbsp;12.069948] </span><span style="color:olive;">Bluetooth</span>: BNEP socket layer initialized
<span style="color:green;">[&nbsp;&nbsp;&nbsp;12.324611] </span><span style="color:olive;">IPv6</span>: ADDRCONF(NETDEV_CHANGE): wlan0: link becomes ready
<span style="color:green;">[&nbsp;&nbsp;&nbsp;12.550947] </span><span style="color:olive;">capability</span>: warning: 'jsvc' uses 32-bit capabilities (legacy support in use)
<span style="color:green;">[6747957.616361] </span><span style="color:olive;">systemd[1]</span>: apt-daily-upgrade.timer: Adding 30min 59.587367s random time.
<span style="color:green;">[6747957.616475] </span><span style="color:olive;">systemd[1]</span>: certbot.timer: Adding 9h 33min 59.814450s random time.
<span style="color:green;">[6747957.618302] </span><span style="color:olive;">systemd[1]</span>: apt-daily.timer: Adding 10h 45min 46.280925s random time.
<span style="color:green;">[6747957.618941] </span><span style="color:olive;">systemd[1]</span>: certbot.timer: Adding 2h 50min 52.044547s random time.
<span style="color:green;">[6747959.631954] </span><span style="color:olive;">systemd[1]</span>: apt-daily-upgrade.timer: Adding 10min 15.297459s random time.
<span style="color:green;">[6747959.633905] </span><span style="color:olive;">systemd[1]</span>: apt-daily.timer: Adding 4h 16min 37.947242s random time.
<span style="color:green;">[6748041.314743] </span><span style="color:olive;">systemd[1]</span>: apt-daily-upgrade.timer: Adding 38min 34.211442s random time.
<span style="color:green;">[6748041.314888] </span><span style="color:olive;">systemd[1]</span>: certbot.timer: Adding 1h 13min 5.729543s random time.
<span style="color:green;">[6748041.316627] </span><span style="color:olive;">systemd[1]</span>: apt-daily.timer: Adding 8h 51min 17.496350s random time.
<span style="color:green;">[6748041.317440] </span><span style="color:olive;">systemd[1]</span>: certbot.timer: Adding 1h 43min 53.931135s random time.
<span style="color:green;">[6748041.614637] </span><span style="color:olive;">systemd[1]</span>: apt-daily-upgrade.timer: Adding 3min 3.308862s random time.
<span style="color:green;">[6748041.614771] </span><span style="color:olive;">systemd[1]</span>: certbot.timer: Adding 1h 19min 8.748926s random time.
<span style="color:green;">[6748041.616506] </span><span style="color:olive;">systemd[1]</span>: apt-daily.timer: Adding 6h 47min 59.554408s random time.
<span style="color:green;">[6748041.616954] </span><span style="color:olive;">systemd[1]</span>: certbot.timer: Adding 2h 37min 52.593422s random time.
<span style="color:green;">[6748047.999716] </span><span style="color:olive;">systemd[1]</span>: apt-daily-upgrade.timer: Adding 13min 12.326945s random time.
<span style="color:green;">[6748048.001467] </span><span style="color:olive;">systemd[1]</span>: apt-daily.timer: Adding 9min 11.394661s random time.
<span style="color:green;">[6748048.252835] </span><span style="color:olive;">systemd[1]</span>: apt-daily-upgrade.timer: Adding 57min 30.557044s random time.
<span style="color:green;">[6748048.254577] </span><span style="color:olive;">systemd[1]</span>: apt-daily.timer: Adding 10h 33min 16.713080s random time.
<span style="color:green;">[6748056.693672] </span><span style="color:olive;">systemd[1]</span>: apt-daily-upgrade.timer: Adding 6min 53.776985s random time.
<span style="color:green;">[6748056.695448] </span><span style="color:olive;">systemd[1]</span>: apt-daily.timer: Adding 8h 38min 1.039658s random time.
<span style="color:green;">[6748065.440519] </span><span style="color:olive;">systemd[1]</span>: apt-daily-upgrade.timer: Adding 56min 46.665168s random time.
<span style="color:green;">[6748065.442243] </span><span style="color:olive;">systemd[1]</span>: apt-daily.timer: Adding 10h 49min 58.965052s random time.
<span style="color:green;">[6748071.777044] </span><span style="color:olive;">systemd[1]</span>: apt-daily-upgrade.timer: Adding 26min 24.825119s random time.
<span style="color:green;">[6748071.777176] </span><span style="color:olive;">systemd[1]</span>: certbot.timer: Adding 6h 30min 50.383816s random time.
<span style="color:green;">[6748071.778899] </span><span style="color:olive;">systemd[1]</span>: apt-daily.timer: Adding 5h 45min 7.685054s random time.
<span style="color:green;">[6748071.779465] </span><span style="color:olive;">systemd[1]</span>: certbot.timer: Adding 3h 35min 40.807376s random time.
<span style="color:green;">[6748072.267479] </span><span style="color:olive;">systemd[1]</span>: apt-daily-upgrade.timer: Adding 6min 51.544483s random time.
<span style="color:green;">[6748072.267612] </span><span style="color:olive;">systemd[1]</span>: certbot.timer: Adding 2h 33min 23.827799s random time.
<span style="color:green;">[6748072.269393] </span><span style="color:olive;">systemd[1]</span>: apt-daily.timer: Adding 8min 36.245317s random time.
<span style="color:green;">[6748072.269874] </span><span style="color:olive;">systemd[1]</span>: certbot.timer: Adding 10h 55min 6.148416s random time.
<span style="color:green;">[6748072.952207] </span><span style="color:olive;">systemd[1]</span>: apt-daily-upgrade.timer: Adding 35min 8.038678s random time.
<span style="color:green;">[6748072.952341] </span><span style="color:olive;">systemd[1]</span>: certbot.timer: Adding 1h 8min 19.552046s random time.
&nbsp;
<span style="color:#fafafa;">/dev/null</span> <span style="color:#00b9ae;">$</span> <span class="blink-me">_</span>
`;

        var dmesg_array = dmesg.split("\n");

        function scroll_lines(i, max) {
            if (i >= max)
                return;
            let value = dmesg_array[i];
            let delay = Math.floor(Math.pow(Math.random(), 3) * 500);
            $(document.body).append($('<div class="devnull-console-line">' + value + "</div>")).hide().show();
            window.scrollTo(0, document.body.scrollHeight);
            setTimeout(function() {
                scroll_lines(i + 1, max);
            }, delay);
        }

        function display_console() {
            scroll_lines(0, dmesg_array.length);
        }

        function scrollDown() {
            $("html, body").animate({
                scrollTop: $().prop("scrollHeight")
            }, 0);
        }

        display_console();
        // display_signup(); // Descomenta si necesitas esta función
    });
});