<script lang="ts">
	let x = 100; // posisi awal X
	let y = 100; // posisi awal Y
	let isDragging = false;
	let offsetX = 0;
	let offsetY = 0;

	// Fungsi saat user mulai klik
	function handleMouseDown(event: MouseEvent) {
		isDragging = true;
		offsetX = event.clientX - x;
		offsetY = event.clientY - y;
	}

	// Fungsi saat mouse bergerak
	function handleMouseMove(event: MouseEvent) {
		if (isDragging) {
			x = event.clientX - offsetX;
			y = event.clientY - offsetY;
		}
	}

	// Fungsi saat mouse dilepas
	function handleMouseUp() {
		isDragging = false;
	}
</script>

<!-- Area drag -->
<div class="fixed inset-0 bg-gray-100" on:mousemove={handleMouseMove} on:mouseup={handleMouseUp}>
	<!-- Kotaknya -->
	<div
		class="h-24 w-24 cursor-grab rounded-xl bg-blue-500 shadow-lg active:cursor-grabbing"
		style="transform: translate({x}px, {y}px);"
		on:mousedown={handleMouseDown}
	>
		<p class="pt-8 text-center text-white">Drag Me</p>
	</div>
</div>
